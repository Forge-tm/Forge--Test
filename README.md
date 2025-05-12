# FAQ #
Q: Should I set switches to "On" or "Off" to block telemetry?  
A: "On" means "Telemetry setting is ON", "Off" means "Telemetry setting is OFF". For more info check the descriptions by pressing "?" icons.  
Q: After applying all the settings, something stopped working. What should I do?  
A: Do not use Advanced Settings without knowing the purpose of each button, read descriptions. Click the Default button and reboot.  
Q: How to understand that the program works correctly?  
A: Every switch in WPD reflects to original places in gpedit.msc, services.msc, taskschd.msc, wf.msc.  
Q: I disabled everything in WPD and now "Night Light" doesn't work. How can I fix that?  
A: Enable "Connected Devices Platform User Service" and restart your PC.  
Q: Skype stopped working. What should I do?  
A: Delete the "Extra rule" in the blocker.  
Q: My microphone stopped working. What should I do?  
A: Open Advanced Settings, turn on "Let Windows apps access the microphone".  
Q: I found an error in the Blocker rules.  
A: Currently we provide only the GUI for the 3rd party IP list, for any issue please contact the IP list creator.  
Q: I uninstalled the program from the Windows Store. Now I want to restore it.  
A: Reinstall it from the Windows Store. Or use PowerShell and Google.  
Q: I deleted the Windows Store, PowerShell does not help. How can I restore it?  
A: Use the instruction from this link: https://github.com/kkkgo/LTSB-Add-MicrosoftStore  
Q: How can I change the language?  
A: You can change the language in the "Settings" sidebar on the main window.  

# Arguments #
Note: Case sensitive.  

### App arguments ###
-help  
Create README.txt file.  
-install  
Install the app to Environment Variables for current user.  
-install "all"  
Install the app to Environment Variables for all users.  
-multipleInstances  
Bypass "single instance of the app" check.  
-nosplash  
Hide Splashscreen.  
-nowarnOS  
Hide OS compatibility warning. DO IT AT YOUR OWN RISK!  
-proxy  
Get rule updates via proxy. Example: -proxy "127.0.0.1:8080", -proxy "" - go offline.  
-locale  
Force localization culture. Localization.ini required. Example: -locale "en-US"  
-restorePoint  
Create a Restore Point.  
-dumpRules  
Copy Blocker rules to "rules.txt". App's folder by default.  
-dumpRules "Path"  
Custom path. No backslash at the end required. Example: -dumpRules "C:\folder"  
-wfpOnly  
Ignore "Windows Defender Firewall" and use WFP only.  
-saveState  
Save current state to a bat file.  
-close  
Quit program after arguments execution.  

### Tab arguments ###
-reg4gp  
Use registry for Group Policy instead of group policy objects.  
-pro  
Unlocks Experimental list.  
-showAppxErrors  
Show errors during Apps Tab setup.  
-noMOcheck  
Do not check MS Office installation. Show GP anyway.  
-nofw  
Bypass Blocker Tab loading.  
-noappx  
Bypass Apps Tab loading.  

### Button arguments ###
Note: Priority order.  

-default  
Switch everything to default. *Doesn't restore Windows Store Apps.  
-privacyAll  
Switch everything to full privacy (All switches + All blocker rules). *Doesn't remove Windows Store Apps.  
-recommended  
Switch recommended settings. (Base Privacy switches + "Telemetry" blocker rule).  
-privacy ""  
Switch list of buttons to privacy. Example: -privacy "AllowTelemetry DisableUAR dhscs Proxy Rule2 StartTrackProgs"  
Full list of buttons below.  
-revert ""  
Revert list of buttons to default state. Example: -revert "AllowTelemetry DisableUAR dhscs Proxy Rule2 StartTrackProgs"  
Full list of buttons below.  

### Advanced Button arguments ###
-security  
Check "Set Telemetry to Security level". (Windows 10 Enterprise and LTSB/LTSC)  
-includeAdv  
Check "Include All Advanced settings". (Windows 10)  
-defender ""  
Enable/disable Windows Defender Firewall. Example: -defender "on", -defender "off"  
-wfp ""  
Enable/disable Windows Filtering Platform. Example: -wfp "on", -wfp "off"  

### List of buttons ###
* **Local Group Policy**
* CEIPEnable - Windows Customer Experience Improvement Program
* DisableCustomerImprovementProgram - Internet Explorer Customer Experience Improvement Program
* CEIP - Windows Messenger Customer Experience Improvement Program
* AllowCortana - Allow Cortana
* AllowSearchToUseLocation - Allow search and Cortana to use location
* WindowsErrorReporting - Windows Error Reporting
* DisableUAR - Steps Recorder
* DisableInventory - Inventory Collector
* AllowTelemetry - Telemetry
* RestrictImplicitCollection - Handwriting automatic learning
* AllowInputPersonalization - Input personalization / Allow users to enable online speech recognition services
* AllowLinguisticDataCollection - Improve inking and typing recognition
* ScenarioExecutionEnabled - PerfTrack
* DisableQueryRemoteServer - Microsoft Support Diagnostic Tool
* AdvertisingInfo - Advertising ID
* DisableContentFileUpdates - Search Companion
* DisableWindowsConsumerFeatures - Microsoft consumer experiences
* 
* **MS Office Local Group Policy**
* qmenable - Customer Experience Improvement Program
* sendtelemetry - Send Telemetry
* sendcustomerdata - Send personal information
* 
* **Microsoft Edge (Chromium) Local Group Policy**
* AddressBarMicrosoftSearchInBingProviderEnabled - Enable Microsoft Search in Bing suggestions in the address bar
* AlternateErrorPagesEnabled - Suggest similar pages when a webpage can't be found
* AutofillAddressEnabled - Enable AutoFill for addresses
* AutofillCreditCardEnabled - Enable AutoFill for credit cards
* NetworkPredictionOptions - Enable network prediction
* PersonalizationReportingEnabled - Allow personalization of ads, search and news by sending browsing history to Microsoft
* 
* **Services**
* DiagTrack - Diagnostics Tracking Service / Connected User Experiences and Telemetry
* dhscs - Microsoft (R) Diagnostics Hub Standard Collector Service
* dmwappushservice - Device Management Wireless Application Protocol (WAP) Push message Routing Service
* DcpSvc - DataCollectionPublishingService (DcpSvc)
* WMPNetworkSvc - Windows Media Player Network Sharing Service
* 
* **Task Scheduler**
* Consolidator
* KernelCeipTask
* UsbCeip
* BthSQM
* SqmTasks
* BackgroundUploadTask
* Proxy
* MCA - Microsoft Compatibility Appraiser
* ProgramDataUpdater
* AitAgent
* DiskDiagnosticDataCollector
* GatherNetworkInfo
* DeviceCensus
* 
* **Advanced Local Group Policy**
* PublishUserActivities - Allow publishing of User Activities
* UploadUserActivities - Allow upload of User Activities
* EnableActivityFeed - Enables Activity Feed
* AllowClipboardHistory - Allow Clipboard History
* AllowCrossDeviceClipboard - Allow Clipboard synchronization across devices
* AllowDeviceNameInTelemetry - Allow device name to be sent in Windows diagnostic data
* DisableSettingSync - Sync your settings
* DisableFileSyncNGSC - Use OneDrive for file storage
* DisableAntiSpyware - Windows Defender Antivirus
* EnableSmartScreen - Windows Defender SmartScreen
* 
* **Advanced App Permissions**
* LetAppsAccessAccountInfo - Let Windows apps access account information
* LetAppsAccessCalendar - Let Windows apps access the calendar
* LetAppsAccessCallHistory - Let Windows apps access call history
* LetAppsAccessCamera - Let Windows apps access the camera
* LetAppsAccessContacts - Let Windows apps access the contacts
* LetAppsAccessEmail - Let Windows apps access email
* LetAppsAccessGazeInput - Let Windows apps access an eye tracker device
* LetAppsAccessLocation - Let Windows apps access location
* LetAppsAccessMessaging - Let Windows apps access messaging
* LetAppsAccessMicrophone - Let Windows apps access the microphone
* LetAppsAccessMotion - Let Windows apps access motion
* LetAppsAccessNotifications - Let Windows apps access notifications
* LetAppsAccessPhone - Let Windows apps make phone calls
* LetAppsAccessRadios - Let Windows apps control radios
* LetAppsAccessTasks - Let Windows apps access Tasks
* LetAppsAccessTrustedDevices - Let Windows apps access trusted devices
* LetAppsGetDiagnosticInfo - Let Windows apps access diagnostic information about other apps
* LetAppsRunInBackground - Let Windows apps run in the background
* LetAppsSyncWithDevices - Let Windows apps communicate with unpaired devices
* LetAppsActivateWithVoice - Let Windows apps activate with voice
* LetAppsActivateWithVoiceAboveLock - Let Windows apps activate with voice while the system is locked
* LetAppsAccessBackgroundSpatialPerception - Let Windows app access user movements while running in the background
* LetAppsAccessGraphicsCaptureProgrammatic - Let Windows apps take screenshots of various windows or displays
* LetAppsAccessGraphicsCaptureWithoutBorder - Let Windows apps turn off the screenshot border
* 
* **Advanced Services**
* CDPUserSvc - Connected Devices Platform User Service
* OneSyncSvc - Sync Host
* PimIndexMaintenanceSvc - Contact Data
* UnistoreSvc - User Data Storage
* UserDataSvc - User Data Access
* MessagingService - MessagingService
* WpnUserService - Windows Push Notifications User Service
* 
* **Miscellaneous**
* ShowSyncProviderNotifications - Show sync provider notifications
* TailoredExperiencesWithDiagnosticDataEnabled - Tailored experiences
* StartTrackProgs - Let Windows track app launches to improve Start and search results
* HttpAcceptLanguageOptOut - Let websites provide locally relevant content by accessing my language list
* 
* **Windows Update**
* WUGP - Access to all Windows Update features
* wuauserv - Windows Update
* WaaSMedicSvc - Windows Update Medic Service
* UsoSvc - Update Orchestrator Service
* WaaSMedicTask - PerformRemediation
* ScheduledStart - Scheduled Start
* ScheduleScan - Schedule Scan
* ScheduleScanStaticTask - Schedule Scan Static Task
* ScheduleWakeToWork - Schedule Wake To Work
* ScheduleWork - Schedule Work
* 
* **Blocker**
* bTelemetry - Block Telemetry
* bExtra - Block Extra
* bUpdate - Block Update
