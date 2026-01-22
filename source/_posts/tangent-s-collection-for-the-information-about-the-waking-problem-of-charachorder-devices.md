---
title: Tangent's collection for the information about the waking problem of CharaChorder devices
description: Tangent collection the information about the waking problem of CharaChorder devices in this note.
date: 2025-12-29T05:15:49.933Z
updated: 2026-01-01T11:49:44.047Z
categories: [Note, Resource]
alias:
  - /2025/12/27/tangent-s-collection-for-the-information-about-the-waking-problem-of-charachorder-devices/
  - /2025/12/28/tangent-s-collection-for-the-information-about-the-waking-problem-of-charachorder-devices/
  - /2025/12/29/tangent-s-collection-for-the-information-about-the-waking-problem-of-charachorder-devices/
  - /2025/12/30/tangent-s-collection-for-the-information-about-the-waking-problem-of-charachorder-devices/
  - /2025/12/31/tangent-s-collection-for-the-information-about-the-waking-problem-of-charachorder-devices/
otherLanguages:
  - text: 繁體中文版
    path: https://andy23512.com/blog-zh-tw/tangent-的-charachorder-裝置喚醒問題相關資訊收集/
---

# TL;DR

Although some combinations of OS version and CCOS version might not have this problem, I think the best workaround now is **turning off the sleep setting on your computer** if you don’t want to mess around with the OS or CCOS versions and you are not required to have the sleep setting by some information security regulations.

Still actively collecting the related information of this waking-up issue from the Internet. If you have any useful information, especially some working / not working environments with Windows or Linux platforms, please contact me via Discord (Tangent Chang, @andy23512).

## Other things to try for troubleshooting

### Check if related wake-up or power settings in your computer are correctly configured

#### Windows

##### OS setting - Allow this device to wake the computer

- **Open Device Manager**: Right-click the Start button (Windows icon) and select "Device Manager".
- **Locate Your Device**: Expand the "Keyboards" category.
- **Open Device Properties**: Double-click the specific device.
- **Check Power Management**: Go to the "Power Management" tab.
- **Enable Wake Feature**: Check the box next to "Allow this device to wake the computer".
- **Confirm**: Click OK to save the changes.

##### BIOS setting - "Wake on USB," "USB Power Delivery," or "PCIe Devices Power On"

### Upgrade OS version

### Upgrade CCOS version (also try beta)

### Try a different USB port or hub.

### (Mac) Reset SMC

## My tries

### Windows

- Windows PC (Windows 10 22H2) with my CC2 (CCOS 3.0.0-gamma.4)
  - Any keystrokes on my CC2 cannot wake up the PC when the PC is sleeping.
  - My CC2 is not waked up after the PC is waked up, and works again after unpluging and repluging

### Mac

- On my Mac Mini with the latest MacOS (26 Tahoe), when the computer is sleeping, a keystroke on my CC2 (CCOS 2.1.0) can wake it up without problem.
- Previously, on my Mac Pro with previous MacOS versions (<=25), the computer could not wake up with any keystrokes on my CC1 or CC2.
- My MacBook Pro with macOS 26 cannot be woken up by my CC2 with CCOS stable version (CCOS 2.1.0), but can be woken up with CCOS gamma version (CCOS 3.0.0-gamma.4)
- There are still not enough samples to prove that the issue can be fixed by just upgrading the macOS or upgrading the CCOS.

| Computer    | MacOS | Input Device | CCOS          | Hub/Adapter                        | Can the computer be woken up by a keystroke from the input device? |
| ----------- | ----- | ------------ | ------------- | ---------------------------------- | ------------------------------------------------------------------ |
| Mac Mini    | 26    | CC2          | 2.1.0         | USB-C male to USB-A female adapter | <div class="check"></div>                                          |
| Mac Pro     | 25    | CC2          | 2.1.0         | No                                 | :x:                                                                |
| Mac Pro     | 25    | CC1          | 2.1.0         | No                                 | :x:                                                                |
| MacBook Pro | 26    | CC2          | 2.1.0         | USB-C Hub                          | :x:                                                                |
| MacBook Pro | 26    | CC2          | 3.0.0-gamma.4 | USB-C Hub                          | <div class="check"></div>                                          |

## Related Information

### Windows

- [Enable or Disable Device to Wake Computer in Windows 11](https://www.elevenforum.com/t/enable-or-disable-device-to-wake-computer-in-windows-11.6964/)

### Mac

- [Power on USB ports after sleeping mode](https://discussions.apple.com/thread/251131637?sortBy=rank)
- [Fixing USB disconnects on sleep on macOS](https://tosbourn.com/usb-disconnects-macos/)
- [M1 doesn’t power on USB keyboard on wake](https://www.reddit.com/r/macmini/comments/11dyp3x/m1_doesnt_power_on_usb_keyboard_on_wake/)
