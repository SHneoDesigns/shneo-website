# Generates the raster brand images (favicon PNG, apple-touch-icon, OpenGraph
# image) with Windows' System.Drawing. Run: powershell -File tools/make-images.ps1
Add-Type -AssemblyName System.Drawing
$root = Split-Path -Parent $PSScriptRoot
$static = Join-Path $root 'static'
$blue = [System.Drawing.Color]::FromArgb(11, 95, 214)

function RoundedRect($g, $brush, $x, $y, $w, $h, $r) {
  if ($r -le 0) { $g.FillRectangle($brush, $x, $y, $w, $h); return }
  $p = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $p.AddArc($x, $y, $d, $d, 180, 90)
  $p.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $p.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $p.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $p.CloseFigure()
  $g.FillPath($brush, $p)
}

function Mark($size, $file, $radiusRatio) {
  $bmp = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.TextRenderingHint = 'AntiAliasGridFit'
  $g.Clear([System.Drawing.Color]::Transparent)
  RoundedRect $g (New-Object System.Drawing.SolidBrush $blue) 0 0 $size $size ([int]($size * $radiusRatio))
  $font = New-Object System.Drawing.Font 'Segoe UI', ([single]($size * 0.36)), ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
  $fmt = New-Object System.Drawing.StringFormat
  $fmt.Alignment = 'Center'; $fmt.LineAlignment = 'Center'
  $g.DrawString('SH', $font, [System.Drawing.Brushes]::White, (New-Object System.Drawing.RectangleF 0, ([single]($size * 0.02)), $size, $size), $fmt)
  $bmp.Save((Join-Path $static $file), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
}

Mark 32 'favicon-32.png' 0.25
Mark 180 'apple-touch-icon.png' 0.0

# OpenGraph 1200x630
$w = 1200; $h = 630
$bmp = New-Object System.Drawing.Bitmap $w, $h
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'AntiAlias'; $g.TextRenderingHint = 'AntiAliasGridFit'
$bg = New-Object System.Drawing.Drawing2D.LinearGradientBrush((New-Object System.Drawing.Point 0, 0), (New-Object System.Drawing.Point $w, $h), [System.Drawing.Color]::FromArgb(12, 17, 24), [System.Drawing.Color]::FromArgb(14, 40, 82))
$g.FillRectangle($bg, 0, 0, $w, $h)
RoundedRect $g (New-Object System.Drawing.SolidBrush $blue) 96 160 120 120 28
$fmt = New-Object System.Drawing.StringFormat
$fmt.Alignment = 'Center'; $fmt.LineAlignment = 'Center'
$g.DrawString('SH', (New-Object System.Drawing.Font 'Segoe UI', 46, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)), [System.Drawing.Brushes]::White, (New-Object System.Drawing.RectangleF 96, 163, 120, 120), $fmt)
$white = [System.Drawing.Brushes]::White
$soft = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(176, 192, 212))
$g.DrawString('SHneoDesigns', (New-Object System.Drawing.Font 'Segoe UI', 72, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)), $white, 250, 158)
$g.DrawString('SHneoTools', (New-Object System.Drawing.Font 'Segoe UI', 40, ([System.Drawing.FontStyle]::Regular), ([System.Drawing.GraphicsUnit]::Pixel)), $soft, 256, 246)
$g.DrawString('Focused tools for concrete everyday tasks.', (New-Object System.Drawing.Font 'Segoe UI', 38, ([System.Drawing.FontStyle]::Regular), ([System.Drawing.GraphicsUnit]::Pixel)), $soft, 96, 400)
$g.DrawString('shneo.app', (New-Object System.Drawing.Font 'Segoe UI', 32, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)), $white, 96, 520)
New-Item -ItemType Directory -Force (Join-Path $static 'assets') | Out-Null
$bmp.Save((Join-Path $static 'assets\og.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
Write-Output 'images written'
