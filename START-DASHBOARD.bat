@echo off
echo ============================================
echo AI CANDIDATE DASHBOARD - STARTING...
echo ============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js first:
    echo 1. Go to: https://nodejs.org
    echo 2. Click the big green button (LTS version)
    echo 3. Run the installer
    echo 4. Then double-click this file again
    echo.
    pause
    exit
)

echo Node.js found! Installing dependencies...
echo.

REM Install dependencies if needed
if not exist "node_modules" (
    echo Installing packages (this takes 1-2 minutes)...
    call npm install
    echo.
)

echo Starting dashboard...
echo.
echo ============================================
echo Dashboard will open at: http://localhost:5173
echo.
echo Press Ctrl+C to stop the server
echo ============================================
echo.

REM Start the development server
call npm run dev

pause
