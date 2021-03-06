define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Није могуће учитати апликацију на овој страници. Користите дугме „Назад“ у прегледачу да бисте покушали опет. Ако поново дође до проблема, обратите се администратору сајта и дајте му информације у оквиру „Технички детаљи“.",
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
      "warningHeading": "Упозорење!",
      "warningLine1": "Коришћење ове алатке вас излаже потенцијалним безбедносним претњама које могу довести до тога да други људи добију приступ вашим личним Office 365 подацима (документима, е-порукама, разговорима и још много тога). Пре него што наставите, уверите се да имате поверења у особу или организацију које су вам затражиле приступ овој алатки.",
      "warningLine2": "Сазнајте више овде: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "***An error occured loading debug manifests.",
      "debugManifestErrorDismissButtonText": "***Dismiss"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Желите ли да дозволите скрипте за отклањање грешака?",
      "allowDebugLoaderTitle": "***Allow debug loader?",
      "allowDebugLoaderAndManifestsTitle": "Желите ли да дозволите учитавање отклањања грешака и скрипте за отклањање грешака?",
      "debugManifestLoadingWarning": "УПОЗОРЕЊЕ: Ова страница садржи небезбедне скрипте које могу оштетити ваш рачунар ако се учитају! Немојте настављати ако немате поверења у пројектанта и не разумете ризике.",
      "debugManifestLoadingWarning2": "Ако нисте сигурни, кликните на дугме {0}.",
      "debugManifestLoadingConfirm": "Учитај скрипте за отклањање грешака",
      "debugManifestLoadingCancel": "Не учитавај скрипте за отклањање грешака",
      "debugManifestLoadingCalloutText": "Ако не знате шта да радите, кликните овде."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "***Loading...",
      "developerToolsTabLoadingUnknownError": "***Unknown error loading developer tools module."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Манифести",
      "noManifestSelected": "Није изабран ниједан манифест"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Перформансе",
      "ErrorAccessingPerfDataErrorMessage": "Није могуће преузети податке о перформансама: објекат је без вредности или недефинисан.",
      "ErrorAccessingRedirectDataErrorMessage": "Дошло је до проблема приликом приступа подацима о перформансама HTTP преусмеравања.",
      "ErrorParsingPercievedLatencyErrorMessage": "Откривена је грешка приликом рашчлањивања података о препознатом кашњењу.",
      "ErrorParsingApiDataErrorMessage": "Откривена је грешка приликом рашчлањивања API података.",
      "UnkownPerformanceDataErrorMessage": "Дошло је до непознате грешке: {0}",
      "DefaultWebPartName": "Веб сегмент",
      "ServerResponseLabel": "Одзив сервера",
      "ApplicationInitializationLabel": "Покретање апликације",
      "ScriptFetchEvalLabel": "Добављање и процењивање скрипти",
      "SpLoaderStartLabel": "SPFx иницијализација",
      "PageRenderLabel": "Визуелизација странице",
      "LeftNavRenderLabel": "Визуелизација левог окна за навигацију",
      "CanvasRenderLabel": "Визуелизација платна",
      "LayoutRenderLabel": "Визуелизација распореда",
      "RedirectResponseLabel": "Одговор о преусмеравању",
      "AppLoadLabel": "Учитавање апликације",
      "RenderWebPartsLabel": "Визуелизација веб сегмената",
      "TotalRenderTimeLabel": "Укупно",
      "GeneralErrorMessage": "Жао нам је, дошло је до грешке приликом преузимања података о перформансама.",
      "ErrorMessagePrefix": "Порука о грешци: {0}",
      "PerformanceDataHint": "Напомена: Када додате или уклоните веб сегмент, освежите страницу да бисте видели ажуриране податке о перформансама.",
      "ModulesLoadedLegendLabel": "Учитани модули",
      "InitializationLegendLabel": "Покретање",
      "RenderTimeLegendLabel": "Време визуелизације",
      "InitializationTimeLabel": "***Initialization time",
      "ModuleLoadingTimeLabel": "***Module loading time",
      "ModuleLazyLoadingDelayLabel": "***Module loading delayed",
      "DataFetchTimeLabel": "***Data fetch time",
      "DataFetchLegendLabel": "Добављање података",
      "ItemsColumnHeader": "Ставке",
      "DurationColumnHeader": "Трајање",
      "MillisecondsUnitLabel": "{0} мс",
      "NAPlaceholder": "Не постоји"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Праћење",
      "EmptyTraceData": "Нема учитаних праћења.",
      "ExportCSVButtonLabel": "Извези CSV",
      "LevelHeaderLabel": "Ниво",
      "MessageHeaderLabel": "Порука",
      "ScopeHeaderLabel": "Опсег",
      "SourceHeaderLabel": "Извор",
      "TimestampHeaderLabel": "Временска ознака",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Дошло је до проблема приликом приступа подацима о праћењу."
    }
  };

  strings.default = strings;
  return strings;
});