---
title: sdkManager命令行
categories: Android
tags: [Android]
comments: true
date: 2017-04-14 15:28:09
updated: 2017-04-14 15:28:09
---
#### sdkmanager

The sdkmanager is a command line tool that allows you to view, install, update, and uninstall packages for the Android SDK. If you're using Android Studio, then you do not need to use this tool and you can instead manage your SDK packages from the IDE.

The sdkmanager tool is provided in the Android SDK Tools package (25.2.3 and higher) and is located in android_sdk/tools/bin/.

<!-- more -->

#### Usage

You can use the sdkmanager to perform the following tasks.
List installed and available packages
```bash
sdkmanager --list [options]
```
Install packages

```bash
sdkmanager packages [options]
```

The packages argument is an SDK-style path as shown with the --list command, wrapped in quotes (for example, "build-tools;25.0.2" or "platforms;android-25"). You can pass multiple package paths, separated with a space, but they must each be wrapped in their own set of quotes.

For example, to get adb and fastboot, install the latest platform tools:

```bash
sdkmanager "platforms;android-25"
```

Alternatively, you can pass a text file that specifies all packages:

```bash
sdkmanager --package_file=package_file [options]
```

The package_file argument is the location of a text file in which each line is an SDK-style path of a package to install (without quotes).

To uninstall, simply add the --uninstall flag:

```bash
sdkmanager --uninstall packages [options]
sdkmanager --uninstall --package_file=package_file [options]
```

#### Update all installed packages

```bash
sdkmanager --update [options]
```

#### Options

The following table lists the available options for the above commands.
Option 	Description


\-\-sdk_root=path  |	Use the specified SDK path instead of the SDK containing this tool
--------------|-------------
\-\-channel=channel_id  |	Include packages in channels up to channel_id. Available channels are:0 (Stable), 1 (Beta), 2 (Dev), and 3 (Canary).
--include_obsolete  |	Include obsolete packages in the package listing or package updates. For use with --list and --update only.
--no_https  |	Force all connections to use HTTP rather than HTTPS.
--verbose |	Verbose output mode. Errors, warnings and informational messages are printed.
--proxy={http | socks} 	Connect via a proxy of the given type: either http for high level protocols such as HTTP or FTP, or socks for a SOCKS (V4 or V5) proxy.
--proxy_host={IP_address | DNS_address} 	IP or DNS address of the proxy to use.
--proxy_port=port_number |	Proxy port number to connect to.

Note: If you want to install packages for an operating system different than the current machine, specify the REPO_OS_OVERRIDE environment variable to either "windows", "macosx", or "linux".
