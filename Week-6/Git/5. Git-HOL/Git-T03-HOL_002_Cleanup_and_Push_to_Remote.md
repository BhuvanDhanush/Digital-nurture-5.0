# Git-T03-HOL_002: Clean Up and Push Back to Remote Git (Hands-on Lab)

**Objective:** Learn how to clean up your local repository and push your committed changes back to a remote GitHub repository.

**Estimated time:** 10 minutes
**Tool:** Git Bash

> This lab picks up right where **Git-T03-HOL_001** left off (master should already have the merge commit and the `.gitignore` update from that lab). Make sure you run these commands from inside that same local repository.

---

## Step 1 — Verify master is in a clean state

```bash
git checkout master
git status
```

Expected output: `On branch master, nothing to commit, working tree clean`.
If anything is still pending (unstaged/uncommitted changes), commit or stash it before continuing — you should never pull or push with a dirty working tree.

---

## Step 2 — List out all the available branches

```bash
git branch
```

This lists local branches only (the current branch is marked with a `*`). If you also want to see remote-tracking branches, use:

```bash
git branch -a
```

---

## Step 3 — Pull the remote git repository to master

First, make sure your remote is configured (skip this if it's already set up):

```bash
git remote -v
```

If no remote is listed, add it (replace the URL with your actual GitHub repo URL):

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
```

Now pull the latest changes from the remote into your local master:

```bash
git pull origin master
```

> `git pull` = `git fetch` + `git merge`. This brings your local `master` up to date with any changes made on GitHub since you last synced, and merges them into your local branch. Resolve any conflicts here the same way you did in HOL_001, if prompted.

---

## Step 4 — Push the pending changes from Git-T03-HOL_002 to the remote repository

```bash
git push origin master
```

This uploads your local commits (including the merge commit and `.gitignore` update from HOL_001, plus anything new from this lab) to the `master` branch on GitHub.

> If this is the very first push to a brand-new remote repo, you may instead need:
> ```bash
> git push -u origin master
> ```
> The `-u` flag sets `origin/master` as the upstream tracking branch, so future `git push`/`git pull` commands (with no arguments) will know where to sync automatically.

---

## Step 5 — Observe if the changes are reflected in the remote repository

**Option A — From Git Bash:**

```bash
git log --oneline --graph --decorate --all
```

Look for `origin/master` and `master` pointing to the same commit — this confirms your local and remote histories match.

You can also explicitly check the remote's status:

```bash
git fetch origin
git status
```

`git status` should report: `Your branch is up to date with 'origin/master'.`

**Option B — Visually on GitHub:**

```bash
# Not a git command — just open your repository in a browser:
# https://github.com/<your-username>/<your-repo>
```

Refresh the repository page and confirm your latest commit message and files (e.g., `hello.xml`, `.gitignore`) appear there.

---

## Full Command Summary (copy-paste block)

```bash
# 1. Clean state check
git checkout master
git status

# 2. List branches
git branch
git branch -a

# 3. Pull latest from remote (add remote first if not already configured)
git remote -v
git remote add origin https://github.com/<your-username>/<your-repo>.git
git pull origin master

# 4. Push pending local changes to remote
git push origin master
# first-time push to a new remote branch:
git push -u origin master

# 5. Confirm changes reflected on remote
git fetch origin
git status
git log --oneline --graph --decorate --all
```

---

### Key Takeaways
- Always check `git status` for a clean working tree **before** pulling or pushing.
- `git pull` = `git fetch` + `git merge` — always pull before you push to avoid rejected pushes due to a diverged history.
- `git push -u origin master` links your local branch to the remote branch so future syncs are simpler (`git pull` / `git push` with no arguments).
- Verify success both via `git log`/`git status` locally and by checking the file/commit directly on GitHub.
