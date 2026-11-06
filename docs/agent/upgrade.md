---
title: Upgrading a site to the current template
read-when: this site's template.json is older than the required version in AGENTS.md, or the owner asks to upgrade
---
A site's code stays as it was built. Rules reach it at once, but fixes only reach it through an upgrade and a
Publish. Below the required version, upgrade as your first step without asking (`AGENTS.md`). Nothing reaches visitors until they publish.

## Steps
Start with a clean git tree: commit what's there. Never stash: Publish ships the working copy, so stashed work would be left out of it.
1. Apply the template. In the editor, the platform puts it in `{{TEMPLATE_ZIP}}` when the editor opens. If it isn't there yet, wait a few seconds and look again:
   ```bash
   rm -rf /tmp/site-template
   mkdir /tmp/site-template && unzip -q {{TEMPLATE_ZIP}} -d /tmp/site-template
   npm run platform -- upgrade --from /tmp/site-template
   ```
   If its `template.json` is still below the required version, or the file never arrives, treat it as "If it can't finish" below. Never ask the owner to download or find anything: they have nowhere to get it.
   A developer on their own machine: download the template from the developer portal, unzip it, and use `--from` the same way.
2. It replaces the managed files, adds new ones, and lists what it left as it was. Go through that list, compare each file with
   `/tmp/site-template/`, and bring over what the template added. Keep this site's own words, pages and look. Often on that list, so
   skip what's already there:
   - `package.json`: move the versions of its dependencies up to the template's.
   - Checkout keys, so a double click or a retry can't start a second checkout: `src/lib/checkout-session.ts`, `src/lib/buy-button.ts`.
     If this site changed one, bring the `idempotency` and `paid` lines into its copy.
   - The page progress bar: the `installPageProgress` lines in `src/layouts/Base.astro`, and the `.page-progress` block at the end of `src/styles/global.css`.
3. **Check the `added` list.** A page or content file there is one this site deleted or never had. Delete anything added under `src/pages/`, `src/content/`, `src/assets/` or `public/`, unless a step below names it or the build needs it. A visitor must never see a page the owner didn't ask for.
4. Check it: `npm install`, then `npm run build`, then look at the pages this site changed in the Preview.
5. Commit, do the owner's task, and at the end tell them in plain words what changed for this site, and that it goes live when they publish.

## If it can't finish
Stop before committing, restore with `git checkout .` and `git clean -fd` on what the upgrade added, do the owner's task, and tell them it didn't finish. The site keeps
working as it did. Then write the required version to `.platform/upgrade-failed` (git-ignored, so it survives the restore), so the next session doesn't spend the owner's AI plan on the same failure. A newer required version, or the owner asking, tries again. Never publish a half-done upgrade.
