#!/bin/bash
# ============================================================
# Git Lab: Setup, Notepad++ Integration, and First Commit
# Run this in Git Bash (or VS Code's integrated terminal set to Git Bash)
# Run line-by-line, not all at once, since some steps require you
# to edit values (name, email, paths, remote URL) before continuing.
# ============================================================

# ---------------------------------------------
# STEP 1: Setup your machine with Git Configuration
# ---------------------------------------------

# 1. Check Git is installed
git --version

# 2. Configure user-level Git identity (EDIT the values below first)
git config --global user.name "Bhuvan Dhnaush"
git config --global user.email "bhuvandhanush2006@gmail.com"

# 3. Verify the configuration
git config --list


# ---------------------------------------------
# STEP 2: Integrate Notepad++ as the default Git editor
# ---------------------------------------------

# 1. Check if notepad++ is recognized by Git Bash
notepad++

# If the above fails with "command not found", notepad++.exe is not on PATH.
# Add it manually via:
#   Control Panel -> System -> Advanced system settings ->
#   Environment Variables -> Path -> Edit -> New ->
#   (add the folder containing notepad++.exe, e.g. C:\Program Files\Notepad++)
# Then close and reopen Git Bash.

# 2. Re-test after updating PATH
notepad++

# 3. Create an alias for notepad++ in your bash profile
echo "alias notepad++='/c/Program Files/Notepad++/notepad++.exe'" >> ~/.bashrc

# Open .bashrc in notepad++ to confirm the alias line was added
notepad++ ~/.bashrc

# Reload the profile so the alias takes effect
source ~/.bashrc

# 4. Set Notepad++ as Git's default editor
git config --global core.editor "'/c/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"

# 5. Verify Notepad++ is the default editor
git config --global -e
# (Close the Notepad++ window that opens to continue)


# ---------------------------------------------
# STEP 3: Add a file to a source code repository
# ---------------------------------------------

# 1. Create and enter a new project folder
mkdir GitDemo
cd GitDemo

# Initialize the repository
git init

# 2. Verify initialization (shows hidden .git folder)
ls -la

# 3. Create welcome.txt with content
echo "Welcome to Git Demo" > welcome.txt

# 4. Verify the file was created
ls

# 5. Verify its content
cat welcome.txt

# 6. Check status (file will show as "untracked")
git status

# 7. Stage the file so Git tracks it
git add welcome.txt

# 8. Commit with a multi-line message (opens Notepad++ since it's the default editor)
git commit
# In Notepad++: type your commit message, save, and close the editor
# to complete the commit.

# 9. Confirm the local repository is now in sync with the working directory
git status

# ---------------------------------------------
# STEP 3 (contd.): Connect to a remote repository
# ---------------------------------------------

# 10. After creating a "GitDemo" project on GitLab/GitHub, link it as the remote
#     (EDIT the URL below with your actual repository URL)
git remote add origin https://github.com/your-username/GitDemo.git

# 11. Pull from the remote (in case it has initial files like README/license)
git pull origin master

# 12. Push your local commits to the remote
git push origin master