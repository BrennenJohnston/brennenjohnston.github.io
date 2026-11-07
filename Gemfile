source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins

# Used only by .github/workflows/qa.yml and local link checking. GitHub Pages
# builds the site itself and never installs this group.
group :test do
  gem "html-proofer", "~> 5.0"
  # html-proofer 5.2.2 calls JSON.parse with a positional options hash, which
  # json 3.0 removed, so --hydra and --typhoeus crash before any link is
  # checked. Gemfile.lock is not committed, so this pin is what keeps CI on 2.x.
  gem "json", "< 3"
end
