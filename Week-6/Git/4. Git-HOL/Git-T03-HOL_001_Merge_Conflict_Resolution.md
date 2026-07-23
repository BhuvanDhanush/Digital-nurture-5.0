# Git-T03-HOL_001: Resolving Merge Conflicts (Hands-on Lab)

**Objective:** Learn how to resolve a conflict that occurs when the trunk/master and a branch have both modified the same file, and merge them back together.

**Estimated time:** 30 minutes
**Tool:** Git Bash (with an optional visual diff/merge tool such as P4Merge)

> Note: Wherever you see `<your_editor>` you can substitute `vi`, `nano`, `code`, or simply use `echo` commands as shown — both approaches are given below.

---

## Step 1 — Verify master is in a clean state

```bash
git checkout master
git status
```

You should see something like `On branch master, nothing to commit, working tree clean`. If not, commit or stash any pending changes before proceeding.

---

## Step 2 — Create a branch "GitWork" and add a file "hello.xml"

```bash
git checkout -b GitWork
echo "<message>Hello from the GitWork branch - version 1</message>" > hello.xml
git status
```

`git status` will show `hello.xml` as an **untracked** file.

---

## Step 3 — Update the content of "hello.xml" and observe the status

```bash
echo "<message>Hello from the GitWork branch - updated version 2</message>" > hello.xml
git status
```

`git status` now shows `hello.xml` still untracked (since it was never added), but modified in the working directory.

---

## Step 4 — Commit the changes to reflect in the branch

```bash
git add hello.xml
git commit -m "Added and updated hello.xml in GitWork branch"
```

---

## Step 5 — Switch to master

```bash
git checkout master
```

Note that `hello.xml` disappears from your working directory here — that's expected, since it only exists on the `GitWork` branch so far.

---

## Step 6 — Add a file "hello.xml" to master with different content

```bash
echo "<message>Hello from the MASTER branch - conflicting content</message>" > hello.xml
git status
```

---

## Step 7 — Commit the changes to master

```bash
git add hello.xml
git commit -m "Added hello.xml with different content on master"
```

You now have two commit histories that both created `hello.xml` with different content — the classic setup for a merge conflict.

---

## Step 8 — Observe the log

```bash
git log --oneline --graph --decorate --all
```

This shows the diverging history: `master` and `GitWork` each have their own commit for `hello.xml`, branching from a common ancestor.

---

## Step 9 — Check the differences with git diff

```bash
git diff master GitWork -- hello.xml
```

This prints a text diff of `hello.xml` between the two branches so you can see exactly which lines differ before merging.

---

## Step 10 — Visualize differences using P4Merge (or any 3-way merge/diff tool)

```bash
# One-time setup: configure P4Merge as the diff tool
git config --global diff.tool p4merge
git config --global difftool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
git config --global difftool.prompt false

# Launch the visual diff
git difftool master GitWork -- hello.xml
```

> Adjust the `difftool.p4merge.path` to match where P4Merge is installed on your machine (Mac/Linux paths will differ, e.g. `/usr/bin/p4merge` or `/Applications/p4merge.app/Contents/MacOS/p4merge`).

---

## Step 11 — Merge the branch into master

```bash
git checkout master
git merge GitWork
```

Since both branches modified the same lines of `hello.xml`, Git reports:

```
Auto-merging hello.xml
CONFLICT (add/add): Merge conflict in hello.xml
Automatic merge failed; fix conflicts and then commit the result.
```

---

## Step 12 — Observe the Git conflict markup

```bash
cat hello.xml
```

You'll see Git's conflict markers inserted directly into the file:

```
<<<<<<< HEAD
<message>Hello from the MASTER branch - conflicting content</message>
=======
<message>Hello from the GitWork branch - updated version 2</message>
>>>>>>> GitWork
```

- Everything between `<<<<<<< HEAD` and `=======` is **master's** version.
- Everything between `=======` and `>>>>>>> GitWork` is the **incoming branch's** version.

You can also confirm the conflict state with:

```bash
git status
```

---

## Step 13 — Use a 3-way merge tool to resolve the conflict

```bash
git mergetool
```

This launches P4Merge (or your configured tool) in 3-way merge mode, showing:
- **Left pane** — master's version ("Base"/"Yours")
- **Right pane** — GitWork's version ("Theirs")
- **Center pane** — the merged result you edit and save

Pick/merge the desired content in the center pane, save, and close the tool.

**Manual alternative (without a GUI tool):** open `hello.xml` in a text editor, remove the `<<<<<<<`, `=======`, `>>>>>>>` markers, and keep/combine whichever content you want, e.g.:

```bash
echo "<message>Hello - merged content from master and GitWork</message>" > hello.xml
```

After resolving, mark the file as resolved:

```bash
git add hello.xml
```

> `git mergetool` typically creates a backup file named `hello.xml.orig`. This is addressed in Step 15.

---

## Step 14 — Commit the changes to master once the conflict is resolved

```bash
git commit -m "Resolved merge conflict between master and GitWork in hello.xml"
```

(If you used `git mergetool`/`git merge`, Git usually pre-fills a merge commit message — you can accept it as-is or edit it.)

---

## Step 15 — Observe git status and add the backup file to .gitignore

```bash
git status
```

You'll likely see an untracked file `hello.xml.orig` (created by the merge tool as a backup). Add it to `.gitignore` so it's never tracked:

```bash
echo "*.orig" >> .gitignore
git status
```

---

## Step 16 — Commit the changes to .gitignore

```bash
git add .gitignore
git commit -m "Updated .gitignore to exclude .orig backup files"
```

---

## Step 17 — List out all the available branches

```bash
git branch
```

(Use `git branch -a` if you also want to see remote-tracking branches.)

---

## Step 18 — Delete the branch that was merged into master

```bash
git branch -d GitWork
```

`-d` (lowercase) only deletes the branch if it has been fully merged into its upstream/current branch — safe for this scenario. (Use `-D` to force-delete an unmerged branch, but that's not needed here since `GitWork` is already merged.)

---

## Step 19 — Observe the final log

```bash
git log --oneline --graph --decorate
```

This shows the final, linear/merged history on `master`, including the merge commit that joined `GitWork`'s changes, now that the `GitWork` branch reference itself has been deleted.

---

## Full Command Summary (copy-paste block)

```bash
# 1. Clean state check
git checkout master
git status

# 2-4. Create branch, add & update file, commit
git checkout -b GitWork
echo "<message>Hello from the GitWork branch - version 1</message>" > hello.xml
echo "<message>Hello from the GitWork branch - updated version 2</message>" > hello.xml
git add hello.xml
git commit -m "Added and updated hello.xml in GitWork branch"

# 5-7. Switch to master, add conflicting file, commit
git checkout master
echo "<message>Hello from the MASTER branch - conflicting content</message>" > hello.xml
git add hello.xml
git commit -m "Added hello.xml with different content on master"

# 8. View history
git log --oneline --graph --decorate --all

# 9. Diff between branches
git diff master GitWork -- hello.xml

# 10. Visual diff (requires P4Merge configured)
git difftool master GitWork -- hello.xml

# 11. Merge (will conflict)
git merge GitWork

# 12. Inspect conflict markers
cat hello.xml
git status

# 13. Resolve via 3-way merge tool
git mergetool
git add hello.xml

# 14. Commit resolved merge
git commit -m "Resolved merge conflict between master and GitWork in hello.xml"

# 15-16. Clean up backup file via .gitignore
git status
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Updated .gitignore to exclude .orig backup files"

# 17-18. List and delete merged branch
git branch
git branch -d GitWork

# 19. Final log
git log --oneline --graph --decorate
```

---

### Key Takeaways
- Conflicts occur when the **same lines/file** are modified differently on two branches being merged.
- Git marks conflicts inline with `<<<<<<<`, `=======`, `>>>>>>>`.
- `git mergetool` (e.g., with P4Merge) gives a visual 3-way merge view: **base/yours**, **theirs**, and the **merged result**.
- Always `git add` the resolved file(s) before committing the merge.
- Clean up tool-generated backup files (`*.orig`) via `.gitignore` to keep the repo tidy.
- Only delete a branch with `-d` after confirming it's fully merged (Git will refuse otherwise, protecting you from data loss).
