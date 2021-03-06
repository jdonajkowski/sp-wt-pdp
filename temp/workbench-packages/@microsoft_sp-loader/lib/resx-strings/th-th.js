define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "ไม่สามารถโหลดแอปพลิเคชันบนหน้านี้ ใช้ปุ่มย้อนกลับของเบราว์เซอร์เพื่อลองอีกครั้ง ถ้าปัญหายังคงอยู่ ให้ติดต่อผู้ดูแลของไซต์ แล้วให้ข้อมูลในรายละเอียดทางเทคนิค",
      "platformFailedToLoadError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\"",
      "platformFailedToLoadWithMessageError": "***Platform failed to load. Id: \"{0}\", name: \"{1}\".\r\nError: {2}",
      "applicationFailedToInitializeError": "***Error initializing application. Error: {0}",
      "invalidPreloadedDataError": "***Invalid preloaded data.",
      "manifestNotFoundByIdError": "***Manifest not found for component id \"{0}\".",
      "manifestNotFoundError": "***Manifest not found for component id \"{0}\" and version \"{1}\".",
      "systemConfigDisabledError": "***System.config() is not supported. Use a manifest to specify the configuration.",
      "loadComponentLog": "***Loading component \"{0}\" ({1}).",
      "loadComponentEndLog": "***Component \"{0}\" ({1}) loaded.",
      "loadComponentRetryLog": "***Loading component \"{0}\" ({1}). Attempt {2} of {3}.",
      "loadComponentError": "***Failed to load component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentMaxRetriesError": "***Attempted to load component \"{0}\" ({1}) {2} times without success.",
      "loadComponentDependencyError": "***Failed to load component dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadComponentDependencyFailoverPathError": "***Failed to load component dependency \"{0}\" with failover path \"{1}\" from component \"{2}\" ({3}).\r\nOriginal error: {4}",
      "loadPathDependencyLog": "***Loading path dependency \"{0}\" from component \"{1}\" ({2})",
      "loadPathDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}).\r\nOriginal error: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "***Failed to load path dependency \"{0}\" from component \"{1}\" ({2}) due to another dependency that failed to load.",
      "loadEntryPointError": "***Failed to load entry point from component \"{0}\" ({1}).\r\nOriginal error: {2}",
      "loadComponentReturnsEmptyError": "***loadComponent() returned an empty object for component \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "***loadComponent() returned an object with an empty default property for component \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "***The entry point for component \"{0}\" ({1}) has a dependency on \"{2}\" that is not declared in the manifest.",
      "loadScriptWithStringError": "***loadScript function doesn't allow a string as 2nd parameter. Use ILoadScriptOptions instead.",
      "tooManyManifestsError": "***{0} manifests (versions {1}) found for component \"{2}\".",
      "tooManyCompatibleVersionsError": "***{0} compatible versions ({1}) found for component \"{2}\" version \"{3}\".",
      "tooManyComponentsError": "***Too many components found for id \"{0}\".",
      "noComponentFoundError": "***No component found for id \"{0}\".",
      "deleteComponentLog": "***Deleting component \"{0}\" version \"{1}\" from the store.",
      "browserNotSupportedError": "***This version of your browser is not supported.\r\nPlease update your browser to the latest version.",
      "ie9OrOlderNotSupportedError": "***This page does not support Internet Explorer releases older than version 10. Please update your web browser.",
      "firefox43OrOlderNotSupportedError": "***This page does not support Mozilla Firefox releases older than version 44. Please update your web browser.",
      "resourceNotFoundError": "***Resource \"{0}\" not found in loader configuration of manifest for component \"{1}\" ({2}).",
      "noFailoverPathError": "***Cannot call resolveAddress() on a component with no failover path",
      "urlStatusLocalhostFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.\r\nMake sure that you are running 'gulp serve'.",
      "urlStatusFileNotFoundError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.",
      "urlStatusForbiddenError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The access to the file is forbidden.",
      "urlStatusClientErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was an error requesting the file.",
      "urlStatusServerErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a problem in the server.",
      "urlStatusLocalhostNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nMake sure that you are running 'gulp serve' and you have run 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.\r\nThis may be a problem with a HTTPS certificate. Make sure you have the right certificate.",
      "urlStatusNetworkErrorError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.",
      "urlStatusUndefinedError": "***Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}) because of unknown problems.",
      "isUndefinedValidateError": "***The value for \"{0}\" must not be undefined",
      "failedToCreateGlobalVariableError": "***Failed to create global variable \"{0}\" from script \"{1}\"",
      "dependencyLoadError": "***Failed to load module '{0}' because dependency {1} was not loaded",
      "missingPathDependencyError": "***Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "***Error loading debug script. Ensure the server is running and the \"{0}\" parameter URL is correct.",
      "errorLoadingDebugScriptHTTP": "***Error loading debug script. Ensure the server is running, the \"{0}\" parameter URL is correct, and loading unsafe scripts is allowed. Also consider using a development certificate and serving debug scripts over HTTPS.",
      "errorLoadingDebugScriptMalformed": "***Error loading debug script. The debug URL ({0}) appears to be malformed.",
      "errorLoadingDebugScriptUnknown": "***Unknown error loading a debug script.",
      "errorLoadingDebugLoaderTitle": "***Error loading debug loader.",
      "errorLoadingDebugManifestTitle": "***Error loading debug manifests.",
      "errorLoadingUnknownTitle": "***Error loading debug scripts."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "***Missing component or initializer function.",
      "closeDeveloperToolsAriaLabel": "***Close developer tools."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "คำเตือน!",
      "warningLine1": "การใช้เครื่องมือนี้จะเป็นการเปิดช่องให้ภัยคุกคามด้านความปลอดภัยที่อาจเกิดขึ้น ซึ่งอาจทำให้ผู้อื่นสามารถเข้าถึงข้อมูล Office 365 ส่วนบุคคล (เอกสาร อีเมล การสนทนา และอื่นๆ) ของคุณ โปรดตรวจสอบให้แน่ใจว่าคุณเชื่อถือบุคคลหรือองค์กรที่ขอให้คุณเข้าถึงเครื่องมือนี้ก่อนดำเนินการต่อ",
      "warningLine2": "เรียนรู้เพิ่มเติมที่นี่: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "***An error occured loading debug manifests.",
      "debugManifestErrorDismissButtonText": "***Dismiss"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "อนุญาตให้ใช้สคริปต์แก้จุดบกพร่องหรือไม่",
      "allowDebugLoaderTitle": "***Allow debug loader?",
      "allowDebugLoaderAndManifestsTitle": "อนุญาตตัวโหลดแก้จุดบกพร่องและสคริปต์แก้จุดบกพร่องหรือไม่",
      "debugManifestLoadingWarning": "คำเตือน: หน้านี้มีสคริปต์ที่ไม่ปลอดภัย ซึ่งอาจเป็นอันตรายกับคอมพิวเตอร์ของคุณถ้าถูกโหลด อย่าดำเนินการใดๆ นอกจากคุณจะเชื่อถือนักพัฒนาและเข้าใจถึงความเสี่ยง",
      "debugManifestLoadingWarning2": "ถ้าคุณไม่แน่ใจ ให้คลิก {0}",
      "debugManifestLoadingConfirm": "โหลดสคริปต์การดีบัก",
      "debugManifestLoadingCancel": "ไม่ต้องโหลดสคริปต์การดีบัก",
      "debugManifestLoadingCalloutText": "ถ้าคุณไม่ทราบว่าจะทำอะไร ให้คลิกที่นี่"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "***Loading...",
      "developerToolsTabLoadingUnknownError": "***Unknown error loading developer tools module."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "ไฟล์กำกับ",
      "noManifestSelected": "ไม่ได้เลือกไฟล์กำกับ"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "ประสิทธิภาพ",
      "ErrorAccessingPerfDataErrorMessage": "มีปัญหาในการเข้าถึงข้อมูลประสิทธิภาพ: วัตถุเป็นค่า Null หรือไม่ได้ระบุ",
      "ErrorAccessingRedirectDataErrorMessage": "มีปัญหาในการเข้าถึงข้อมูลประสิทธิภาพของการเปลี่ยนเส้นทาง HTTP",
      "ErrorParsingPercievedLatencyErrorMessage": "ตรวจพบข้อผิดพลาดขณะแยกวิเคราะห์ข้อมูลเวลาแฝงที่รับรู้",
      "ErrorParsingApiDataErrorMessage": "ตรวจพบข้อผิดพลาดขณะแยกวิเคราะห์ข้อมูล API",
      "UnkownPerformanceDataErrorMessage": "เกิดข้อผิดพลาดที่ไม่รู้จัก: {0}",
      "DefaultWebPartName": "Web Part",
      "ServerResponseLabel": "การตอบสนองของเซิร์ฟเวอร์",
      "ApplicationInitializationLabel": "การเตรียมใช้งานแอปพลิเคชัน",
      "ScriptFetchEvalLabel": "การดึงข้อมูลและประเมินผลสคริปต์",
      "SpLoaderStartLabel": "การเตรียมใช้งาน SPFx",
      "PageRenderLabel": "การแสดงหน้า",
      "LeftNavRenderLabel": "การแสดงการนำทางด้านซ้าย",
      "CanvasRenderLabel": "การแสดง Canvas",
      "LayoutRenderLabel": "แสดงเค้าโครง",
      "RedirectResponseLabel": "เวลาตอบสนองของการเปลี่ยนเส้นทาง",
      "AppLoadLabel": "การโหลดแอปพลิเคชัน",
      "RenderWebPartsLabel": "การแสดง Web Part",
      "TotalRenderTimeLabel": "ผลรวม",
      "GeneralErrorMessage": "ขออภัย มีบางอย่างผิดพลาดขณะดึงข้อมูลประสิทธิภาพ",
      "ErrorMessagePrefix": "ข้อความแสดงข้อผิดพลาด: {0}",
      "PerformanceDataHint": "หมายเหตุ: หลังจากเพิ่มหรือนำ Web Part ออกแล้ว ให้รีเฟรชหน้าเพื่อดูข้อมูลประสิทธิภาพที่อัปเดตแล้ว",
      "ModulesLoadedLegendLabel": "มอดูลที่โหลด",
      "InitializationLegendLabel": "การเตรียมใช้งาน",
      "RenderTimeLegendLabel": "เวลาแสดง",
      "InitializationTimeLabel": "***Initialization time",
      "ModuleLoadingTimeLabel": "***Module loading time",
      "ModuleLazyLoadingDelayLabel": "***Module loading delayed",
      "DataFetchTimeLabel": "***Data fetch time",
      "DataFetchLegendLabel": "การดึงข้อมูล",
      "ItemsColumnHeader": "รายการ",
      "DurationColumnHeader": "ระยะเวลา",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "ไม่มี"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "ติดตาม",
      "EmptyTraceData": "ไม่ได้โหลดข้อมูลการติดตามใดๆ",
      "ExportCSVButtonLabel": "ส่งออกไฟล์ CSV",
      "LevelHeaderLabel": "ระดับ",
      "MessageHeaderLabel": "ข้อความ",
      "ScopeHeaderLabel": "ขอบเขต",
      "SourceHeaderLabel": "แหล่งที่มา",
      "TimestampHeaderLabel": "ประทับเวลา",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "พบปัญหาในการเข้าถึงข้อมูลการติดตาม"
    }
  };

  strings.default = strings;
  return strings;
});