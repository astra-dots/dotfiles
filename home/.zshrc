

# Run fastfetch only outside VS Code integrated terminal
[[ "$TERM_PROGRAM" != "vscode" ]] && fastfetch


# PATH
export PATH="$HOME/.npm-global/bin:$HOME/.local/bin:$PATH"
export ZSH="$HOME/.oh-my-zsh"
export PATH="$HOME/development/flutter/bin:$PATH"
export PATH="$HOME/Android/Sdk/platform-tools:$PATH"
export PATH="$HOME/.local/bin:$PATH"

#ADB
export ADB_MDNS_AUTO_CONNECT=0

# Oh My Zsh theme - disabled because Starship handles prompt
ZSH_THEME=""

# Plugins (must be before starship)
plugins=(git zsh-autosuggestions zsh-syntax-highlighting zoxide fzf)
source $ZSH/oh-my-zsh.sh

# Syntax highlighting: unknown-token stays normal color while typing (no space yet)
ZSH_HIGHLIGHT_STYLES[unknown-token]='none'

# But once space is typed after the command OR when Enter is pressed, highlight it red if it's unknown.
autoload -Uz add-zle-hook-widget
_unknown_cmd_after_space() {
  local first_word="${BUFFER%% *}"
  [[ -z "$first_word" ]] && return
  if [[ "$BUFFER" == *' '* || "$_zsh_line_submitted" == "1" ]]; then
    if ! whence "$first_word" &>/dev/null; then
      region_highlight=("0 ${#first_word} fg=#ff5449,bold" "${region_highlight[@]}")
    fi
  fi
}
add-zle-hook-widget zle-line-pre-redraw _unknown_cmd_after_space

# Aliases
alias rm='trash-put'
bindkey '^H' backward-kill-word
alias cat='bat'
alias ls='eza --icons -F -lgh --git'
alias ll='eza --icons -F -lgha --git'
alias l='eza --icons -F -l'
alias nano='micro'
alias samba-enable='sudo systemctl enable --now smb nmb'

# FZF & FD
export FZF_DEFAULT_COMMAND='fd --type f'
export FZF_ALT_C_COMMAND='fd --type d --hidden --exclude .git'
[[ -f ~/.config/fzf/fzf-colors.zsh ]] && source ~/.config/fzf/fzf-colors.zsh

# Editor
export EDITOR='micro'
export VISUAL='micro'

# pnpm
export PNPM_HOME="/home/anirudh/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac

# --------------------
#        PROMPT
# --------------------

# Empty line between prompts (skip first)
autoload -Uz add-zsh-hook
typeset -g _has_been_prompted=0
_empty_line_precmd() {
  if (( _has_been_prompted )); then
    echo ""
  fi
  _has_been_prompted=1
}
add-zsh-hook precmd _empty_line_precmd

# Starship full prompt
eval "$(starship init zsh)"
ZLE_RPROMPT_INDENT=0

# Save the original full prompt command substitution strings RIGHT after init
# PROMPT is like '$(/usr/bin/starship prompt --terminal-width="$COLUMNS" ...)'
typeset -g _STARSHIP_FULL_PROMPT="$PROMPT"
typeset -g _STARSHIP_FULL_RPROMPT="$RPROMPT"

# --- Transient Prompt - PROVEN subnut/Powerlevel10k-inspired version ---
# Official Starship docs say zsh transient is not natively supported, so we use
# community pattern that uses zle -F fd watch to delay restoration.
# Sources:
# https://gist.github.com/subnut/3af65306fbecd35fe2dda81f59acf2b2
# https://github.com/starship/starship/discussions/5950#discussioncomment-14060198
# https://pycvala.de/blog/command-line/starship-my-attempt-at-quitting-oh-my-zsh-for-good/
#
# How it works:
# 1. On Enter, zle-line-finish fires, opens /dev/null fd, registers restore function via zle -F
# 2. Immediately sets PROMPT to transient (computed with status) and redraws previous line
# 3. On next event loop tick, fd becomes readable, restore function runs: closes fd, restores full prompt
# This delayed restore is why simple immediate restore failed (no transient) or no restore failed (forever transient).

[[ -c /dev/null ]] || return 0
zmodload zsh/system || return 0

zle -N send-break _transient_prompt_widget-send-break
function _transient_prompt_widget-send-break {
  _transient_prompt_widget-zle-line-finish
  zle .send-break
}

zle -N zle-line-finish _transient_prompt_widget-zle-line-finish
function _transient_prompt_widget-zle-line-finish {
  # Highlight invalid command red if user submitted without space
  _zsh_line_submitted=1
  local first_word="${BUFFER%% *}"
  if [[ -n "$first_word" ]] && ! whence "$first_word" &>/dev/null; then
    region_highlight=("0 ${#first_word} fg=#ff5449,bold" "${region_highlight[@]}")
  fi

  # Only create fd watch once per transient cycle
  (( ! _transient_prompt_fd )) && {
    sysopen -r -o cloexec -u _transient_prompt_fd /dev/null
    zle -F $_transient_prompt_fd _transient_prompt_restore_prompt
  }
  # Build transient prompt with correct status color (green/red)
  local trans_prompt
  trans_prompt=$(starship prompt \
    --profile transient \
    --terminal-width="$COLUMNS" \
    --keymap="${KEYMAP:-}" \
    --status="${STARSHIP_CMD_STATUS:-0}" \
    --pipestatus="${STARSHIP_PIPE_STATUS[*]:-0}" \
    --cmd-duration="${STARSHIP_DURATION:-}" \
    --jobs="$STARSHIP_JOBS_COUNT")

  # Make previous prompt transient
  zle && PROMPT="$trans_prompt" RPROMPT="" zle reset-prompt && zle -R
}

function _transient_prompt_restore_prompt {
  _zsh_line_submitted=0
  # Close fd, unregister watch
  exec {1}>&-
  (( ${+1} )) && zle -F $1
  _transient_prompt_fd=0
  # Restore full prompt for NEXT command
  PROMPT="$_STARSHIP_FULL_PROMPT"
  RPROMPT="$_STARSHIP_FULL_RPROMPT"
  zle reset-prompt
  zle -R
}

# Handle Ctrl+C - make it transient too
(( ${+precmd_functions} )) || typeset -ga precmd_functions
precmd_functions+=_transient_prompt_precmd
function _transient_prompt_precmd {
  TRAPINT() {
    zle && _transient_prompt_widget-zle-line-finish
    return $(( 128 + $1 ))
  }
}

# Ephemeral markdown scratchpad with softwrap & wordwrap
scratch() {
  local tmpfile="$(mktemp /tmp/scratch.XXXXXX).md"
  micro -softwrap=true -wordwrap=true "$tmpfile"
}
