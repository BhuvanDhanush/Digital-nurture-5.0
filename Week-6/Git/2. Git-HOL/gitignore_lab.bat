@echo off
REM ============================================================
REM Hands-on Lab: Git Ignore
REM Objective: Ignore unwanted files/folders (.log files and log folder)
REM Run this from inside your local Git repository folder
REM ============================================================

echo ====================================================
echo STEP 1: Checking current git status (before changes)
echo ====================================================
git status
echo.

echo ====================================================
echo STEP 2: Creating a .log file in the working directory
echo ====================================================
echo This is a sample log entry > application.log
dir *.log
echo.

echo ====================================================
echo STEP 3: Creating a 'log' folder with a file inside
echo ====================================================
if not exist log mkdir log
echo Sample log inside folder > log\debug.log
dir log
echo.

echo ====================================================
echo STEP 4: Checking git status BEFORE updating .gitignore
echo (application.log and log folder should show as untracked)
echo ====================================================
git status
echo.

echo ====================================================
echo STEP 5: Creating/Updating .gitignore file
echo ====================================================
if not exist .gitignore type nul > .gitignore

findstr /x "*.log" .gitignore >nul 2>&1
if errorlevel 1 echo *.log>> .gitignore

findstr /x "log/" .gitignore >nul 2>&1
if errorlevel 1 echo log/>> .gitignore

echo Contents of .gitignore:
type .gitignore
echo.

echo ====================================================
echo STEP 6: Checking git status AFTER updating .gitignore
echo (application.log and log folder should now be ignored)
echo ====================================================
git status
echo.

echo ====================================================
echo STEP 7: Staging and committing .gitignore itself
echo ====================================================
git add .gitignore
git commit -m "Add .gitignore to ignore .log files and log folder"
echo.

echo ====================================================
echo STEP 8: Final verification - git status after commit
echo ====================================================
git status
echo.

echo ====================================================
echo LAB COMPLETE
echo Verify above that:
echo   1. application.log is NOT listed as untracked
echo   2. log folder is NOT listed as untracked
echo   3. .gitignore was committed successfully
echo ====================================================
pause
