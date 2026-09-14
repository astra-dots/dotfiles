local pref_by_location = require("pref-by-location")
pref_by_location:setup({
  prefs = {
  	-- Downloads
    {
      location = os.getenv("HOME") .. "/Downloads",
      sort = { by = "mtime", reverse = true, dir_first = true },
    },
    -- Screenshots
    {
      location = os.getenv("HOME") .. "/Pictures/Screenshots/Steam",
      sort = { by = "mtime", reverse = true, dir_first = true },
    },
    {
      location = os.getenv("HOME") .. "/Pictures/Screenshots",
      sort = { by = "mtime", reverse = true, dir_first = true },
    },
    -- Home
    {
      location = os.getenv("HOME"),
      sort = { by = "natural", reverse = false, dir_first = true },
    },
  }
})
