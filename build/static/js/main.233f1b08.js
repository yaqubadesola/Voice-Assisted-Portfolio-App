/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(24);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(25);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AcademicCapIcon_js__ = __webpack_require__(32);
/* unused harmony reexport AcademicCapIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AdjustmentsIcon_js__ = __webpack_require__(33);
/* unused harmony reexport AdjustmentsIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AnnotationIcon_js__ = __webpack_require__(34);
/* unused harmony reexport AnnotationIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ArchiveIcon_js__ = __webpack_require__(35);
/* unused harmony reexport ArchiveIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ArrowCircleDownIcon_js__ = __webpack_require__(36);
/* unused harmony reexport ArrowCircleDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ArrowCircleLeftIcon_js__ = __webpack_require__(37);
/* unused harmony reexport ArrowCircleLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ArrowCircleRightIcon_js__ = __webpack_require__(38);
/* unused harmony reexport ArrowCircleRightIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ArrowCircleUpIcon_js__ = __webpack_require__(39);
/* unused harmony reexport ArrowCircleUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ArrowDownIcon_js__ = __webpack_require__(40);
/* unused harmony reexport ArrowDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ArrowLeftIcon_js__ = __webpack_require__(41);
/* unused harmony reexport ArrowLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ArrowNarrowDownIcon_js__ = __webpack_require__(42);
/* unused harmony reexport ArrowNarrowDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ArrowNarrowLeftIcon_js__ = __webpack_require__(43);
/* unused harmony reexport ArrowNarrowLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ArrowNarrowRightIcon_js__ = __webpack_require__(44);
/* unused harmony reexport ArrowNarrowRightIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ArrowNarrowUpIcon_js__ = __webpack_require__(45);
/* unused harmony reexport ArrowNarrowUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ArrowRightIcon_js__ = __webpack_require__(46);
/* unused harmony reexport ArrowRightIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ArrowSmDownIcon_js__ = __webpack_require__(47);
/* unused harmony reexport ArrowSmDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ArrowSmLeftIcon_js__ = __webpack_require__(48);
/* unused harmony reexport ArrowSmLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ArrowSmRightIcon_js__ = __webpack_require__(49);
/* unused harmony reexport ArrowSmRightIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ArrowSmUpIcon_js__ = __webpack_require__(50);
/* unused harmony reexport ArrowSmUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ArrowUpIcon_js__ = __webpack_require__(51);
/* unused harmony reexport ArrowUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ArrowsExpandIcon_js__ = __webpack_require__(52);
/* unused harmony reexport ArrowsExpandIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__AtSymbolIcon_js__ = __webpack_require__(53);
/* unused harmony reexport AtSymbolIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__BackspaceIcon_js__ = __webpack_require__(54);
/* unused harmony reexport BackspaceIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__BadgeCheckIcon_js__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_23__BadgeCheckIcon_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__BanIcon_js__ = __webpack_require__(56);
/* unused harmony reexport BanIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__BeakerIcon_js__ = __webpack_require__(57);
/* unused harmony reexport BeakerIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__BellIcon_js__ = __webpack_require__(58);
/* unused harmony reexport BellIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__BookOpenIcon_js__ = __webpack_require__(59);
/* unused harmony reexport BookOpenIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__BookmarkAltIcon_js__ = __webpack_require__(60);
/* unused harmony reexport BookmarkAltIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__BookmarkIcon_js__ = __webpack_require__(61);
/* unused harmony reexport BookmarkIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__BriefcaseIcon_js__ = __webpack_require__(62);
/* unused harmony reexport BriefcaseIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__CakeIcon_js__ = __webpack_require__(63);
/* unused harmony reexport CakeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__CalculatorIcon_js__ = __webpack_require__(64);
/* unused harmony reexport CalculatorIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__CalendarIcon_js__ = __webpack_require__(65);
/* unused harmony reexport CalendarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__CameraIcon_js__ = __webpack_require__(66);
/* unused harmony reexport CameraIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__CashIcon_js__ = __webpack_require__(67);
/* unused harmony reexport CashIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ChartBarIcon_js__ = __webpack_require__(68);
/* unused harmony reexport ChartBarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ChartPieIcon_js__ = __webpack_require__(69);
/* unused harmony reexport ChartPieIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ChartSquareBarIcon_js__ = __webpack_require__(70);
/* unused harmony reexport ChartSquareBarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ChatAlt2Icon_js__ = __webpack_require__(71);
/* unused harmony reexport ChatAlt2Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ChatAltIcon_js__ = __webpack_require__(72);
/* unused harmony reexport ChatAltIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ChatIcon_js__ = __webpack_require__(73);
/* unused harmony reexport ChatIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__CheckCircleIcon_js__ = __webpack_require__(74);
/* unused harmony reexport CheckCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__CheckIcon_js__ = __webpack_require__(75);
/* unused harmony reexport CheckIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ChevronDoubleDownIcon_js__ = __webpack_require__(76);
/* unused harmony reexport ChevronDoubleDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ChevronDoubleLeftIcon_js__ = __webpack_require__(77);
/* unused harmony reexport ChevronDoubleLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ChevronDoubleRightIcon_js__ = __webpack_require__(78);
/* unused harmony reexport ChevronDoubleRightIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ChevronDoubleUpIcon_js__ = __webpack_require__(79);
/* unused harmony reexport ChevronDoubleUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ChevronDownIcon_js__ = __webpack_require__(80);
/* unused harmony reexport ChevronDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ChevronLeftIcon_js__ = __webpack_require__(81);
/* unused harmony reexport ChevronLeftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ChevronRightIcon_js__ = __webpack_require__(82);
/* unused harmony reexport ChevronRightIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ChevronUpIcon_js__ = __webpack_require__(83);
/* unused harmony reexport ChevronUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ChipIcon_js__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_52__ChipIcon_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ClipboardCheckIcon_js__ = __webpack_require__(85);
/* unused harmony reexport ClipboardCheckIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ClipboardCopyIcon_js__ = __webpack_require__(86);
/* unused harmony reexport ClipboardCopyIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ClipboardListIcon_js__ = __webpack_require__(87);
/* unused harmony reexport ClipboardListIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ClipboardIcon_js__ = __webpack_require__(88);
/* unused harmony reexport ClipboardIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ClockIcon_js__ = __webpack_require__(89);
/* unused harmony reexport ClockIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__CloudDownloadIcon_js__ = __webpack_require__(90);
/* unused harmony reexport CloudDownloadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__CloudUploadIcon_js__ = __webpack_require__(91);
/* unused harmony reexport CloudUploadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__CloudIcon_js__ = __webpack_require__(92);
/* unused harmony reexport CloudIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__CodeIcon_js__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_61__CodeIcon_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__CogIcon_js__ = __webpack_require__(94);
/* unused harmony reexport CogIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__CollectionIcon_js__ = __webpack_require__(95);
/* unused harmony reexport CollectionIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ColorSwatchIcon_js__ = __webpack_require__(96);
/* unused harmony reexport ColorSwatchIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__CreditCardIcon_js__ = __webpack_require__(97);
/* unused harmony reexport CreditCardIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__CubeTransparentIcon_js__ = __webpack_require__(98);
/* unused harmony reexport CubeTransparentIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__CubeIcon_js__ = __webpack_require__(99);
/* unused harmony reexport CubeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__CurrencyBangladeshiIcon_js__ = __webpack_require__(100);
/* unused harmony reexport CurrencyBangladeshiIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__CurrencyDollarIcon_js__ = __webpack_require__(101);
/* unused harmony reexport CurrencyDollarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__CurrencyEuroIcon_js__ = __webpack_require__(102);
/* unused harmony reexport CurrencyEuroIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__CurrencyPoundIcon_js__ = __webpack_require__(103);
/* unused harmony reexport CurrencyPoundIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__CurrencyRupeeIcon_js__ = __webpack_require__(104);
/* unused harmony reexport CurrencyRupeeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__CurrencyYenIcon_js__ = __webpack_require__(105);
/* unused harmony reexport CurrencyYenIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__CursorClickIcon_js__ = __webpack_require__(106);
/* unused harmony reexport CursorClickIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__DatabaseIcon_js__ = __webpack_require__(107);
/* unused harmony reexport DatabaseIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__DesktopComputerIcon_js__ = __webpack_require__(108);
/* unused harmony reexport DesktopComputerIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__DeviceMobileIcon_js__ = __webpack_require__(109);
/* unused harmony reexport DeviceMobileIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__DeviceTabletIcon_js__ = __webpack_require__(110);
/* unused harmony reexport DeviceTabletIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__DocumentAddIcon_js__ = __webpack_require__(111);
/* unused harmony reexport DocumentAddIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__DocumentDownloadIcon_js__ = __webpack_require__(112);
/* unused harmony reexport DocumentDownloadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__DocumentDuplicateIcon_js__ = __webpack_require__(113);
/* unused harmony reexport DocumentDuplicateIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__DocumentRemoveIcon_js__ = __webpack_require__(114);
/* unused harmony reexport DocumentRemoveIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__DocumentReportIcon_js__ = __webpack_require__(115);
/* unused harmony reexport DocumentReportIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__DocumentSearchIcon_js__ = __webpack_require__(116);
/* unused harmony reexport DocumentSearchIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__DocumentTextIcon_js__ = __webpack_require__(117);
/* unused harmony reexport DocumentTextIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__DocumentIcon_js__ = __webpack_require__(118);
/* unused harmony reexport DocumentIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__DotsCircleHorizontalIcon_js__ = __webpack_require__(119);
/* unused harmony reexport DotsCircleHorizontalIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__DotsHorizontalIcon_js__ = __webpack_require__(120);
/* unused harmony reexport DotsHorizontalIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__DotsVerticalIcon_js__ = __webpack_require__(121);
/* unused harmony reexport DotsVerticalIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__DownloadIcon_js__ = __webpack_require__(122);
/* unused harmony reexport DownloadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__DuplicateIcon_js__ = __webpack_require__(123);
/* unused harmony reexport DuplicateIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__EmojiHappyIcon_js__ = __webpack_require__(124);
/* unused harmony reexport EmojiHappyIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__EmojiSadIcon_js__ = __webpack_require__(125);
/* unused harmony reexport EmojiSadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__ExclamationCircleIcon_js__ = __webpack_require__(126);
/* unused harmony reexport ExclamationCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__ExclamationIcon_js__ = __webpack_require__(127);
/* unused harmony reexport ExclamationIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__ExternalLinkIcon_js__ = __webpack_require__(128);
/* unused harmony reexport ExternalLinkIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__EyeOffIcon_js__ = __webpack_require__(129);
/* unused harmony reexport EyeOffIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__EyeIcon_js__ = __webpack_require__(130);
/* unused harmony reexport EyeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__FastForwardIcon_js__ = __webpack_require__(131);
/* unused harmony reexport FastForwardIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__FilmIcon_js__ = __webpack_require__(132);
/* unused harmony reexport FilmIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__FilterIcon_js__ = __webpack_require__(133);
/* unused harmony reexport FilterIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__FingerPrintIcon_js__ = __webpack_require__(134);
/* unused harmony reexport FingerPrintIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__FireIcon_js__ = __webpack_require__(135);
/* unused harmony reexport FireIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__FlagIcon_js__ = __webpack_require__(136);
/* unused harmony reexport FlagIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__FolderAddIcon_js__ = __webpack_require__(137);
/* unused harmony reexport FolderAddIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__FolderDownloadIcon_js__ = __webpack_require__(138);
/* unused harmony reexport FolderDownloadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__FolderOpenIcon_js__ = __webpack_require__(139);
/* unused harmony reexport FolderOpenIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__FolderRemoveIcon_js__ = __webpack_require__(140);
/* unused harmony reexport FolderRemoveIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__FolderIcon_js__ = __webpack_require__(141);
/* unused harmony reexport FolderIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__GiftIcon_js__ = __webpack_require__(142);
/* unused harmony reexport GiftIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__GlobeAltIcon_js__ = __webpack_require__(143);
/* unused harmony reexport GlobeAltIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__GlobeIcon_js__ = __webpack_require__(144);
/* unused harmony reexport GlobeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__HandIcon_js__ = __webpack_require__(145);
/* unused harmony reexport HandIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__HashtagIcon_js__ = __webpack_require__(146);
/* unused harmony reexport HashtagIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__HeartIcon_js__ = __webpack_require__(147);
/* unused harmony reexport HeartIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__HomeIcon_js__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_116__HomeIcon_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__IdentificationIcon_js__ = __webpack_require__(149);
/* unused harmony reexport IdentificationIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__InboxInIcon_js__ = __webpack_require__(150);
/* unused harmony reexport InboxInIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__InboxIcon_js__ = __webpack_require__(151);
/* unused harmony reexport InboxIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__InformationCircleIcon_js__ = __webpack_require__(152);
/* unused harmony reexport InformationCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__KeyIcon_js__ = __webpack_require__(153);
/* unused harmony reexport KeyIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__LibraryIcon_js__ = __webpack_require__(154);
/* unused harmony reexport LibraryIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__LightBulbIcon_js__ = __webpack_require__(155);
/* unused harmony reexport LightBulbIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__LightningBoltIcon_js__ = __webpack_require__(156);
/* unused harmony reexport LightningBoltIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__LinkIcon_js__ = __webpack_require__(157);
/* unused harmony reexport LinkIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__LocationMarkerIcon_js__ = __webpack_require__(158);
/* unused harmony reexport LocationMarkerIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__LockClosedIcon_js__ = __webpack_require__(159);
/* unused harmony reexport LockClosedIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__LockOpenIcon_js__ = __webpack_require__(160);
/* unused harmony reexport LockOpenIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__LoginIcon_js__ = __webpack_require__(161);
/* unused harmony reexport LoginIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__LogoutIcon_js__ = __webpack_require__(162);
/* unused harmony reexport LogoutIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__MailOpenIcon_js__ = __webpack_require__(163);
/* unused harmony reexport MailOpenIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__MailIcon_js__ = __webpack_require__(164);
/* unused harmony reexport MailIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__MapIcon_js__ = __webpack_require__(165);
/* unused harmony reexport MapIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__MenuAlt1Icon_js__ = __webpack_require__(166);
/* unused harmony reexport MenuAlt1Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__MenuAlt2Icon_js__ = __webpack_require__(167);
/* unused harmony reexport MenuAlt2Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__MenuAlt3Icon_js__ = __webpack_require__(168);
/* unused harmony reexport MenuAlt3Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__MenuAlt4Icon_js__ = __webpack_require__(169);
/* unused harmony reexport MenuAlt4Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__MenuIcon_js__ = __webpack_require__(170);
/* unused harmony reexport MenuIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__MicrophoneIcon_js__ = __webpack_require__(171);
/* unused harmony reexport MicrophoneIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__MinusCircleIcon_js__ = __webpack_require__(172);
/* unused harmony reexport MinusCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__MinusSmIcon_js__ = __webpack_require__(173);
/* unused harmony reexport MinusSmIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__MinusIcon_js__ = __webpack_require__(174);
/* unused harmony reexport MinusIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__MoonIcon_js__ = __webpack_require__(175);
/* unused harmony reexport MoonIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__MusicNoteIcon_js__ = __webpack_require__(176);
/* unused harmony reexport MusicNoteIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__NewspaperIcon_js__ = __webpack_require__(177);
/* unused harmony reexport NewspaperIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__OfficeBuildingIcon_js__ = __webpack_require__(178);
/* unused harmony reexport OfficeBuildingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__PaperAirplaneIcon_js__ = __webpack_require__(179);
/* unused harmony reexport PaperAirplaneIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__PaperClipIcon_js__ = __webpack_require__(180);
/* unused harmony reexport PaperClipIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__PauseIcon_js__ = __webpack_require__(181);
/* unused harmony reexport PauseIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__PencilAltIcon_js__ = __webpack_require__(182);
/* unused harmony reexport PencilAltIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__PencilIcon_js__ = __webpack_require__(183);
/* unused harmony reexport PencilIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__PhoneIncomingIcon_js__ = __webpack_require__(184);
/* unused harmony reexport PhoneIncomingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__PhoneMissedCallIcon_js__ = __webpack_require__(185);
/* unused harmony reexport PhoneMissedCallIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__PhoneOutgoingIcon_js__ = __webpack_require__(186);
/* unused harmony reexport PhoneOutgoingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__PhoneIcon_js__ = __webpack_require__(187);
/* unused harmony reexport PhoneIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__PhotographIcon_js__ = __webpack_require__(188);
/* unused harmony reexport PhotographIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_157__PlayIcon_js__ = __webpack_require__(189);
/* unused harmony reexport PlayIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_158__PlusCircleIcon_js__ = __webpack_require__(190);
/* unused harmony reexport PlusCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_159__PlusSmIcon_js__ = __webpack_require__(191);
/* unused harmony reexport PlusSmIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_160__PlusIcon_js__ = __webpack_require__(192);
/* unused harmony reexport PlusIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_161__PresentationChartBarIcon_js__ = __webpack_require__(193);
/* unused harmony reexport PresentationChartBarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_162__PresentationChartLineIcon_js__ = __webpack_require__(194);
/* unused harmony reexport PresentationChartLineIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_163__PrinterIcon_js__ = __webpack_require__(195);
/* unused harmony reexport PrinterIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_164__PuzzleIcon_js__ = __webpack_require__(196);
/* unused harmony reexport PuzzleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_165__QrcodeIcon_js__ = __webpack_require__(197);
/* unused harmony reexport QrcodeIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_166__QuestionMarkCircleIcon_js__ = __webpack_require__(198);
/* unused harmony reexport QuestionMarkCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_167__ReceiptRefundIcon_js__ = __webpack_require__(199);
/* unused harmony reexport ReceiptRefundIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_168__ReceiptTaxIcon_js__ = __webpack_require__(200);
/* unused harmony reexport ReceiptTaxIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_169__RefreshIcon_js__ = __webpack_require__(201);
/* unused harmony reexport RefreshIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_170__ReplyIcon_js__ = __webpack_require__(202);
/* unused harmony reexport ReplyIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_171__RewindIcon_js__ = __webpack_require__(203);
/* unused harmony reexport RewindIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_172__RssIcon_js__ = __webpack_require__(204);
/* unused harmony reexport RssIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_173__SaveAsIcon_js__ = __webpack_require__(205);
/* unused harmony reexport SaveAsIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_174__SaveIcon_js__ = __webpack_require__(206);
/* unused harmony reexport SaveIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_175__ScaleIcon_js__ = __webpack_require__(207);
/* unused harmony reexport ScaleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_176__ScissorsIcon_js__ = __webpack_require__(208);
/* unused harmony reexport ScissorsIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_177__SearchCircleIcon_js__ = __webpack_require__(209);
/* unused harmony reexport SearchCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_178__SearchIcon_js__ = __webpack_require__(210);
/* unused harmony reexport SearchIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_179__SelectorIcon_js__ = __webpack_require__(211);
/* unused harmony reexport SelectorIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_180__ServerIcon_js__ = __webpack_require__(212);
/* unused harmony reexport ServerIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_181__ShareIcon_js__ = __webpack_require__(213);
/* unused harmony reexport ShareIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_182__ShieldCheckIcon_js__ = __webpack_require__(214);
/* unused harmony reexport ShieldCheckIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_183__ShieldExclamationIcon_js__ = __webpack_require__(215);
/* unused harmony reexport ShieldExclamationIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_184__ShoppingBagIcon_js__ = __webpack_require__(216);
/* unused harmony reexport ShoppingBagIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_185__ShoppingCartIcon_js__ = __webpack_require__(217);
/* unused harmony reexport ShoppingCartIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_186__SortAscendingIcon_js__ = __webpack_require__(218);
/* unused harmony reexport SortAscendingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_187__SortDescendingIcon_js__ = __webpack_require__(219);
/* unused harmony reexport SortDescendingIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_188__SparklesIcon_js__ = __webpack_require__(220);
/* unused harmony reexport SparklesIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_189__SpeakerphoneIcon_js__ = __webpack_require__(221);
/* unused harmony reexport SpeakerphoneIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_190__StarIcon_js__ = __webpack_require__(222);
/* unused harmony reexport StarIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_191__StatusOfflineIcon_js__ = __webpack_require__(223);
/* unused harmony reexport StatusOfflineIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_192__StatusOnlineIcon_js__ = __webpack_require__(224);
/* unused harmony reexport StatusOnlineIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_193__StopIcon_js__ = __webpack_require__(225);
/* unused harmony reexport StopIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_194__SunIcon_js__ = __webpack_require__(226);
/* unused harmony reexport SunIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_195__SupportIcon_js__ = __webpack_require__(227);
/* unused harmony reexport SupportIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_196__SwitchHorizontalIcon_js__ = __webpack_require__(228);
/* unused harmony reexport SwitchHorizontalIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_197__SwitchVerticalIcon_js__ = __webpack_require__(229);
/* unused harmony reexport SwitchVerticalIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_198__TableIcon_js__ = __webpack_require__(230);
/* unused harmony reexport TableIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_199__TagIcon_js__ = __webpack_require__(231);
/* unused harmony reexport TagIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_200__TemplateIcon_js__ = __webpack_require__(232);
/* unused harmony reexport TemplateIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_201__TerminalIcon_js__ = __webpack_require__(233);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_201__TerminalIcon_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_202__ThumbDownIcon_js__ = __webpack_require__(234);
/* unused harmony reexport ThumbDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_203__ThumbUpIcon_js__ = __webpack_require__(235);
/* unused harmony reexport ThumbUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_204__TicketIcon_js__ = __webpack_require__(236);
/* unused harmony reexport TicketIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_205__TranslateIcon_js__ = __webpack_require__(237);
/* unused harmony reexport TranslateIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_206__TrashIcon_js__ = __webpack_require__(238);
/* unused harmony reexport TrashIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_207__TrendingDownIcon_js__ = __webpack_require__(239);
/* unused harmony reexport TrendingDownIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_208__TrendingUpIcon_js__ = __webpack_require__(240);
/* unused harmony reexport TrendingUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_209__TruckIcon_js__ = __webpack_require__(241);
/* unused harmony reexport TruckIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_210__UploadIcon_js__ = __webpack_require__(242);
/* unused harmony reexport UploadIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_211__UserAddIcon_js__ = __webpack_require__(243);
/* unused harmony reexport UserAddIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_212__UserCircleIcon_js__ = __webpack_require__(244);
/* unused harmony reexport UserCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_213__UserGroupIcon_js__ = __webpack_require__(245);
/* unused harmony reexport UserGroupIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_214__UserRemoveIcon_js__ = __webpack_require__(246);
/* unused harmony reexport UserRemoveIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_215__UserIcon_js__ = __webpack_require__(247);
/* unused harmony reexport UserIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_216__UsersIcon_js__ = __webpack_require__(248);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_216__UsersIcon_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_217__VariableIcon_js__ = __webpack_require__(249);
/* unused harmony reexport VariableIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_218__VideoCameraIcon_js__ = __webpack_require__(250);
/* unused harmony reexport VideoCameraIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_219__ViewBoardsIcon_js__ = __webpack_require__(251);
/* unused harmony reexport ViewBoardsIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_220__ViewGridAddIcon_js__ = __webpack_require__(252);
/* unused harmony reexport ViewGridAddIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_221__ViewGridIcon_js__ = __webpack_require__(253);
/* unused harmony reexport ViewGridIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_222__ViewListIcon_js__ = __webpack_require__(254);
/* unused harmony reexport ViewListIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_223__VolumeOffIcon_js__ = __webpack_require__(255);
/* unused harmony reexport VolumeOffIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_224__VolumeUpIcon_js__ = __webpack_require__(256);
/* unused harmony reexport VolumeUpIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_225__WifiIcon_js__ = __webpack_require__(257);
/* unused harmony reexport WifiIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_226__XCircleIcon_js__ = __webpack_require__(258);
/* unused harmony reexport XCircleIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_227__XIcon_js__ = __webpack_require__(259);
/* unused harmony reexport XIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_228__ZoomInIcon_js__ = __webpack_require__(260);
/* unused harmony reexport ZoomInIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_229__ZoomOutIcon_js__ = __webpack_require__(261);
/* unused harmony reexport ZoomOutIcon */







































































































































































































































/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

var _animateScroll = __webpack_require__(14);

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollEvents = __webpack_require__(11);

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __mapped = {};
var __activeLink = void 0;

exports.default = {

  unmount: function unmount() {
    __mapped = {};
  },

  register: function register(name, element) {
    __mapped[name] = element;
  },

  unregister: function unregister(name) {
    delete __mapped[name];
  },

  get: function get(name) {
    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
  },

  setActiveLink: function setActiveLink(link) {
    return __activeLink = link;
  },

  getActiveLink: function getActiveLink() {
    return __activeLink;
  },

  scrollTo: function scrollTo(to, props) {

    var target = this.get(to);

    if (!target) {
      console.warn("target Element not found");
      return;
    }

    props = _extends({}, props, { absolute: false });

    var containerId = props.containerId;
    var container = props.container;

    var containerElement = void 0;
    if (containerId) {
      containerElement = document.getElementById(containerId);
    } else if (container && container.nodeType) {
      containerElement = container;
    } else {
      containerElement = document;
    }

    props.absolute = true;

    var horizontal = props.horizontal;
    var scrollOffset = _utils2.default.scrollOffset(containerElement, target, horizontal) + (props.offset || 0);

    /*
     * if animate is not provided just scroll into the view
     */
    if (!props.smooth) {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](to, target);
      }

      if (containerElement === document) {
        if (props.horizontal) {
          window.scrollTo(scrollOffset, 0);
        } else {
          window.scrollTo(0, scrollOffset);
        }
      } else {
        containerElement.scrollTop = scrollOffset;
      }

      if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](to, target);
      }

      return;
    }

    /*
     * Animate scrolling
     */

    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var updateHash = function updateHash(hash, historyUpdate) {
  var hashVal = hash.indexOf("#") === 0 ? hash.substring(1) : hash;
  var hashToUpdate = hashVal ? "#" + hashVal : "";
  var curLoc = window && window.location;
  var urlToPush = hashToUpdate ? curLoc.pathname + curLoc.search + hashToUpdate : curLoc.pathname + curLoc.search;
  historyUpdate ? history.pushState(null, "", urlToPush) : history.replaceState(null, "", urlToPush);
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, "");
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var isPositioned = function isPositioned(element) {
  return getComputedStyle(element).position !== "static";
};

var getElementOffsetInfoUntil = function getElementOffsetInfoUntil(element, predicate) {
  var offsetTop = element.offsetTop;
  var currentOffsetParent = element.offsetParent;

  while (currentOffsetParent && !predicate(currentOffsetParent)) {
    offsetTop += currentOffsetParent.offsetTop;
    currentOffsetParent = currentOffsetParent.offsetParent;
  }

  return { offsetTop: offsetTop, offsetParent: currentOffsetParent };
};

var scrollOffset = function scrollOffset(c, t, horizontal) {
  if (horizontal) {
    return c === document ? t.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(c).position !== "static" ? t.offsetLeft : t.offsetLeft - c.offsetLeft;
  } else {
    if (c === document) {
      return t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    }

    // The offsetParent of an element, according to MDN, is its nearest positioned
    // (an element whose position is anything other than static) ancestor. The offsetTop
    // of an element is taken with respect to its offsetParent which may not neccessarily
    // be its parentElement except the parent itself is positioned.

    // So if containerElement is positioned, then it must be an offsetParent somewhere
    // If it happens that targetElement is a descendant of the containerElement, and there
    // is not intermediate positioned element between the two of them, i.e.
    // targetElement"s offsetParent is the same as the containerElement, then the
    // distance between the two will be the offsetTop of the targetElement.
    // If, on the other hand, there are intermediate positioned elements between the
    // two entities, the distance between the targetElement and the containerElement
    // will be the accumulation of the offsetTop of the element and that of its
    // subsequent offsetParent until the containerElement is reached, since it
    // will also be an offsetParent at some point due to the fact that it is positioned.

    // If the containerElement is not positioned, then it can"t be an offsetParent,
    // which means that the offsetTop of the targetElement would not be with respect to it.
    // However, if the two of them happen to have the same offsetParent, then
    // the distance between them will be the difference between their offsetTop
    // since they are both taken with respect to the same entity.
    // The last resort would be to accumulate their offsetTop until a common
    // offsetParent is reached (usually the document) and taking the difference
    // between the accumulated offsetTops

    if (isPositioned(c)) {
      if (t.offsetParent !== c) {
        var isContainerElementOrDocument = function isContainerElementOrDocument(e) {
          return e === c || e === document;
        };

        var _getElementOffsetInfo = getElementOffsetInfoUntil(t, isContainerElementOrDocument),
            offsetTop = _getElementOffsetInfo.offsetTop,
            offsetParent = _getElementOffsetInfo.offsetParent;

        if (offsetParent !== c) {
          throw new Error("Seems containerElement is not an ancestor of the Element");
        }

        return offsetTop;
      }

      return t.offsetTop;
    }

    if (t.offsetParent === c.offsetParent) {
      return t.offsetTop - c.offsetTop;
    }

    var isDocument = function isDocument(e) {
      return e === document;
    };
    return getElementOffsetInfoUntil(t, isDocument).offsetTop - getElementOffsetInfoUntil(c, isDocument).offsetTop;
  }
};

exports.default = {
  updateHash: updateHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(277)();
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return testimonials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return skills; });
var projects=[{title:"Car Seatbelt Simulator",subtitle:"Python and Tkinter",description:"A desktop application tha simulates the behavior of Car Seatbelt Alarm upon speedometer",image:"./CarSeatbelt.gif",link:"https://yaqubadesola.com.ng/"},{title:"Sales Inventory",subtitle:"Laravel, Datatables and Angular",description:"Complete sales inventory management for timely keeping of sales, stock, employees with flexible reporting",image:"./SalesInventory.gif",link:"https://oshodi.yareece.com.ng/login"},{title:"React MERN App",subtitle:"MongoDB Express React and Node ",description:"Simple MERN App for managing student's basic information",image:"./meanApp.gif",link:"https://yaqubadesola.com.ng"},{title:"Invoicing App",subtitle:"Laravel and Yajra Datatables",description:"A sales invoicing application that provides fexible of generating both quotes and invoices on a fly",image:"./InvoiceApps.gif",link:"https://easyinvoice.boldlinks.com.ng/login"},{title:"Voice Assisted Portfolio App",subtitle:"React, Tailwind css & Alan AI",description:"Simple Voice Assisted Vcard App that works exactly like Google Voice Assistant",image:"./VoiceApps.gif",link:"https://yaqubadesola.com.ng"},{title:"Employees Management App",subtitle:"Laravel API, React Bootstrap UI",description:"A react with crud functionality built with laravel API",image:"./ReactLaravel.gif",link:"https://yaqubadesola.com.ng/"}];var testimonials=[{quote:"Yaqub is very patient and knowledgeable. He dealt with issues in a very professional way. He usually tried to find the root cause and solve accordingly. I would definitely recommend Yaqub, he will always contribute something constructive. All the Best.",image:"https://media-exp1.licdn.com/dms/image/C4D03AQGg734j7WN5Fg/profile-displayphoto-shrink_200_200/0/1557231863836?e=1634774400&v=beta&t=mNCx8upLIPundsMMCicqqnMJTqZDQt-MmEQfgm22538",name:"Ibrahim Olayioye",company:"Overland Airways, Lagos, Nigeria"},{quote:"Yaqub is probably one of the most effective professionals to work with. He sees solutions instead of problems and I need to admit that his expertise in software development inspires me. He is an excellent programmer who is willing to help when you need it. A great colleague! ",//image: "https://media-exp1.licdn.com/dms/image/C4D03AQGvCNPT0hD75w/profile-displayphoto-shrink_100_100/0/1607281275468?e=1634774400&v=beta&t=XfPh8CpszqX6vRwF1IRJCOWKZ25GPrvL0ERrNX-0T9U",
image:"https://media-exp1.licdn.com/dms/image/C4E03AQEocPyOVzJunQ/profile-displayphoto-shrink_800_800/0/1517341285405?e=1634774400&v=beta&t=bLf6V5R-sARPa6o4VioWFWlgyVh5Gl6KXyXeKAfJzu8",name:"Azeez Adebayo",company:"Senior .Net and Dynamics 365 CRM, Qatar"}];var skills=["JavaScript","React","Python","PHP","Laravel","Django"];// git init
// git add .
//git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/yaqubadesola/Voice-Assisted-Portfolio-App.git
//git push -u origin main

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _scrollSpy = __webpack_require__(9);

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(3);

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(15);

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  horizontal: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool,
  saveHashHistory: _propTypes2.default.bool,
  spyThrottle: _propTypes2.default.number
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer, this.props.spyThrottle);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (x, y) {
      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var horizontal = _this2.props.horizontal;

      var to = _this2.props.to;
      var element = null;
      var isInside = void 0;
      var isOutside = void 0;

      if (horizontal) {
        var elemLeftBound = 0;
        var elemRightBound = 0;
        var containerLeft = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerLeft = containerCords.left;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemLeftBound = cords.left - containerLeft + x;
          elemRightBound = elemLeftBound + cords.width;
        }

        var offsetX = x - _this2.props.offset;
        isInside = offsetX >= Math.floor(elemLeftBound) && offsetX < Math.floor(elemRightBound);
        isOutside = offsetX < Math.floor(elemLeftBound) || offsetX >= Math.floor(elemRightBound);
      } else {
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var _containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = _containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var _cords = element.getBoundingClientRect();
          elemTopBound = _cords.top - containerTop + y;
          elemBottomBound = elemTopBound + _cords.height;
        }

        var offsetY = y - _this2.props.offset;
        isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      }

      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          var _props$saveHashHistor = _this2.props.saveHashHistory,
              saveHashHistory = _props$saveHashHistor === undefined ? false : _props$saveHashHistor;

          _scrollHash2.default.changeHash("", saveHashHistory);
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        var _props$saveHashHistor2 = _this2.props.saveHashHistory,
            _saveHashHistory = _props$saveHashHistor2 === undefined ? false : _props$saveHashHistor2;

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to, _saveHashHistory);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(274);

var _lodash2 = _interopRequireDefault(_lodash);

var _passiveEventListeners = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The eventHandler will execute at a rate of 15fps by default
var eventThrottler = function eventThrottler(eventHandler) {
  var throttleAmount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 66;
  return (0, _lodash2.default)(eventHandler, throttleAmount);
};

var scrollSpy = {

  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],

  mount: function mount(scrollSpyContainer, throttle) {
    if (scrollSpyContainer) {
      var eventHandler = eventThrottler(function (event) {
        scrollSpy.scrollHandler(scrollSpyContainer);
      }, throttle);
      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
    }
  },
  isMounted: function isMounted(scrollSpyContainer) {
    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
  },
  currentPositionX: function currentPositionX(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageYOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    } else {
      return scrollSpyContainer.scrollLeft;
    }
  },
  currentPositionY: function currentPositionY(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    } else {
      return scrollSpyContainer.scrollTop;
    }
  },
  scrollHandler: function scrollHandler(scrollSpyContainer) {
    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
    callbacks.forEach(function (c) {
      return c(scrollSpy.currentPositionX(scrollSpyContainer), scrollSpy.currentPositionY(scrollSpyContainer));
    });
  },
  addStateHandler: function addStateHandler(handler) {
    scrollSpy.spySetState.push(handler);
  },
  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];

    if (!container.spyCallbacks) {
      container.spyCallbacks = [];
    }

    container.spyCallbacks.push(handler);

    handler(scrollSpy.currentPositionX(scrollSpyContainer), scrollSpy.currentPositionY(scrollSpyContainer));
  },
  updateStates: function updateStates() {
    scrollSpy.spySetState.forEach(function (s) {
      return s();
    });
  },
  unmount: function unmount(stateHandler, spyHandler) {
    scrollSpy.scrollSpyContainers.forEach(function (c) {
      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
    });

    if (scrollSpy.spySetState && scrollSpy.spySetState.length) {
      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
    }

    document.removeEventListener('scroll', scrollSpy.scrollHandler);
  },


  update: function update() {
    return scrollSpy.scrollSpyContainers.forEach(function (c) {
      return scrollSpy.scrollHandler(c);
    });
  }
};

exports.default = scrollSpy;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports.default = Events;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(20);

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._75 = 0;
  this._83 = 0;
  this._18 = null;
  this._38 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._47 = null;
Promise._71 = null;
Promise._44 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._83 === 3) {
    self = self._18;
  }
  if (Promise._47) {
    Promise._47(self);
  }
  if (self._83 === 0) {
    if (self._75 === 0) {
      self._75 = 1;
      self._38 = deferred;
      return;
    }
    if (self._75 === 1) {
      self._75 = 2;
      self._38 = [self._38, deferred];
      return;
    }
    self._38.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._83 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._83 === 1) {
        resolve(deferred.promise, self._18);
      } else {
        reject(deferred.promise, self._18);
      }
      return;
    }
    var ret = tryCallOne(cb, self._18);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._83 = 3;
      self._18 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._83 = 1;
  self._18 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._83 = 2;
  self._18 = newValue;
  if (Promise._71) {
    Promise._71(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._75 === 1) {
    handle(self, self._38);
    self._38 = null;
  }
  if (self._75 === 2) {
    for (var i = 0; i < self._38.length; i++) {
      handle(self, self._38[i]);
    }
    self._38 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

var _smooth = __webpack_require__(275);

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = __webpack_require__(276);

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__(11);

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPosition: 0,
    startPosition: 0,
    targetPosition: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    delta: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionX = function currentPositionX(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollLeft;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
  }
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerWidth = function scrollContainerWidth(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollWidth - containerElement.offsetWidth;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollHeight - containerElement.offsetHeight;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.delta = Math.round(data.targetPosition - data.startPosition);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPosition = data.startPosition + Math.ceil(data.delta * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    if (options.horizontal) {
      data.containerElement.scrollLeft = data.currentPosition;
    } else {
      data.containerElement.scrollTop = data.currentPosition;
    }
  } else {
    if (options.horizontal) {
      window.scrollTo(data.currentPosition, 0);
    } else {
      window.scrollTo(0, data.currentPosition);
    }
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPosition);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(scrollOffset, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  _cancelEvents2.default.subscribe(function () {
    options.data.cancel = true;
  });

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
  options.data.targetPosition = options.absolute ? scrollOffset : scrollOffset + options.data.startPosition;

  if (options.data.startPosition === options.data.targetPosition) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPosition);
    }
    return;
  }

  options.data.delta = Math.round(options.data.targetPosition - options.data.startPosition);

  options.data.duration = functionWrapper(options.duration)(options.data.delta);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
      }
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  if (_scrollEvents2.default.registered['begin']) {
    _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
  }
  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toPosition, options) {
  animateTopScroll(toPosition, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(options.horizontal ? scrollContainerWidth(options) : scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toPosition, options) {
  options = proceedOptions(options);
  setContainer(options);
  var currentPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
  animateTopScroll(toPosition + currentPosition, options);
};

exports.default = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(10);

var _utils = __webpack_require__(4);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollHash = {
  mountFlag: false,
  initialized: false,
  scroller: null,
  containers: {},

  mount: function mount(scroller) {
    this.scroller = scroller;

    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener('hashchange', this.handleHashChange);

    this.initStateFromHash();
    this.mountFlag = true;
  },
  mapContainer: function mapContainer(to, container) {
    this.containers[to] = container;
  },
  isMounted: function isMounted() {
    return this.mountFlag;
  },
  isInitialized: function isInitialized() {
    return this.initialized;
  },
  initStateFromHash: function initStateFromHash() {
    var _this = this;

    var hash = this.getHash();
    if (hash) {
      window.setTimeout(function () {
        _this.scrollTo(hash, true);
        _this.initialized = true;
      }, 10);
    } else {
      this.initialized = true;
    }
  },
  scrollTo: function scrollTo(to, isInit) {
    var scroller = this.scroller;
    var element = scroller.get(to);
    if (element && (isInit || to !== scroller.getActiveLink())) {
      var container = this.containers[to] || document;
      scroller.scrollTo(to, { container: container });
    }
  },
  getHash: function getHash() {
    return _utils2.default.getHash();
  },
  changeHash: function changeHash(to, saveHashHistory) {
    if (this.isInitialized() && _utils2.default.getHash() !== to) {
      _utils2.default.updateHash(to, saveHashHistory);
    }
  },
  handleHashChange: function handleHashChange() {
    this.scrollTo(this.getHash());
  },
  unmount: function unmount() {
    this.scroller = null;
    this.containers = null;
    window.removeEventListener('hashchange', this.handleHashChange);
  }
};

exports.default = scrollHash;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(3);

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
          this.registerElems(this.props.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
module.exports = __webpack_require__(23);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end


if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(19).enable();
  window.Promise = __webpack_require__(21);
}

// fetch() polyfill for making API calls.
__webpack_require__(22);

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(6);

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (false) {
  require('raf').polyfill(global);
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(12);

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
exports.disable = disable;
function disable() {
  enabled = false;
  Promise._47 = null;
  Promise._71 = null;
}

exports.enable = enable;
function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  Promise._47 = function (promise) {
    if (
      promise._83 === 2 && // IS REJECTED
      rejections[promise._56]
    ) {
      if (rejections[promise._56].logged) {
        onHandled(promise._56);
      } else {
        clearTimeout(rejections[promise._56].timeout);
      }
      delete rejections[promise._56];
    }
  };
  Promise._71 = function (promise, err) {
    if (promise._75 === 0) { // not yet handled
      promise._56 = id++;
      rejections[promise._56] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._56),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(12);

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._44);
  p._83 = 1;
  p._18 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._83 === 3) {
            val = val._18;
          }
          if (val._83 === 1) return res(i, val._18);
          if (val._83 === 2) reject(val._18);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(29);
__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.StrictMode,null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */],null)),document.getElementById('root'));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(6),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),m=__webpack_require__(6),r=__webpack_require__(26);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(27);
} else {
  module.exports = require('./cjs/scheduler.development.js');
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_About__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Contact__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Navbar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Project__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Skills__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Testimonials__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_scroll__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alan_ai_alan_sdk_web__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alan_ai_alan_sdk_web___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__alan_ai_alan_sdk_web__);
var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();//import Popup from 'react-popup';
//import Modal from 'react-modal';
// import Work from "./components/Work";
// import Education from "./components/Education";
function App(){var _useState=Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),_useState2=_slicedToArray(_useState,2),index=_useState2[0],setIndex=_useState2[1];var alanBtnInstance=Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function(){if(!alanBtnInstance.current){alanBtnInstance.current=__WEBPACK_IMPORTED_MODULE_8__alan_ai_alan_sdk_web___default()({key:'058a362f0a211286b9bf01baa5cd47d82e956eca572e1d8b807a3e2338fdd0dc/stage',onCommand:function onCommand(commandData){if(commandData.command==='gotoProfile'){var delay=index?null:0;// Call the client code that will react to the received command
__WEBPACK_IMPORTED_MODULE_7_react_scroll__["scroller"].scrollTo(""+commandData.faqId,{duration:800,delay:delay,smooth:"easeInOutQuart"});setIndex(commandData.faqId);}}});}},[]);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main",{className:"text-gray-400 bg-gray-900 body-font"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Navbar__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_About__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Skills__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Project__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Testimonials__["a" /* default */],null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Contact__["a" /* default */],null));}/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function About(props){// const Background = "./bg.jpg";
return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section",{style:{Background:"#000",marginTop:"100px"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"container px-5 py-10 mx-auto"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"text-center mb-20 cc-profile-image"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"flex flex-col justify-center items-center "},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{href:"#about",style:{position:"relative"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{className:"object-cover object-center rounded",alt:"hero",src:"./yaqub.jpg"}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1",{className:"title-font sm:text-4xl text-3xl mb-4 font-small text-white"},"Hi, I'm Yaqub.",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",{className:"hidden lg:inline-block"}),"I love to build amazing apps."),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2",{className:"title-font sm:text-4xl  mb-4 font-small text-white"}," Click on the voice icon at the bottom left corner & say ",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{style:{fontWeight:'bolder',fontSize:'35px',color:"yellow"}},"PLEASE HELP"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",null),"to use this Voice Asisted Portfolio App"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"flex justify-center"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{href:"#contact",className:"inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"},"Work With Me"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{href:"#projects",className:"ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"},"See My Past Work")))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":" flex flex-wrap mb-2  overflow-hidden justify-items-center",style:{margin:"20px",padding:"20px"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"md:flex bg-white rounded-xl shadow-md",style:{padding:"10px"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"p-8"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"uppercase tracking-wide text-sm text-indigo-500 font-semibold",style:{padding:"10px",margin:"10px",color:"black"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1",null,"About")," "),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{style:{padding:"10px",margin:"5px",color:"black"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",null,"Hello! I am ",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{style:{fontWeight:"bolder"}},"Yaqub Adesola"),". Computer Scientist, Software Engineer & Web Developer."),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",null,"A seasoned programmer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.  ",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",null,"I have problem-solving abilities to overcome glitches with creative solutions that are strategically designed to last long-term.",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",null),"I equally have the ability to listen carefully to feedback and to determine modifications for optimal user-function. \xA0\xA0\xA0I love coding"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",null))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"p-8"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{"class":"uppercase tracking-wide text-sm text-indigo-500 font-semibold",style:{padding:"10px",margin:"10px",color:"black"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1",null,"Basic Information")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{style:{padding:"10px",margin:"5px",color:"black"}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table",{"class":"table-auto"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead",null),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr",{"class":"bg-emerald-200"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{style:{fontWeight:"bolder"}},"NAME:")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,"\xA0\xA0\xA0\xA0RAHEEM YAQUB ADESOLA")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr",{"class":"bg-emerald-200"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{style:{fontWeight:"bolder"}},"D.O.B:")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,"\xA0\xA0\xA0\xA022 August 1986")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr",{"class":"bg-emerald-200"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{style:{fontWeight:"bolder"}},"EMAIL:")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,"\xA0\xA0\xA0\xA0yaqub.adesola@gmail.com.")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr",{"class":"bg-emerald-200"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{style:{fontWeight:"bolder"}},"PHONE:")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,"\xA0\xA0\xA0\xA0+234-807-454-4422")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr",{"class":"bg-emerald-200"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{style:{fontWeight:"bolder"}},"ADDRESS:")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,"\xA0\xA0\xA0\xA0Lagos, Nigeria")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr",{"class":"bg-emerald-200"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{style:{fontWeight:"bolder"}},"LANGUAGE:")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td",null,"\xA0\xA0\xA0\xA0English")))))))));}/* harmony default export */ __webpack_exports__["a"] = (About);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Contact;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heroicons_react_solid__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emailjs_com__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emailjs_com___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_emailjs_com__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_toastify__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_toastify_dist_ReactToastify_css__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_toastify_dist_ReactToastify_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_toastify_dist_ReactToastify_css__);
// src/components/Contact.js
__WEBPACK_IMPORTED_MODULE_3_react_toastify__["a" /* toast */].configure();function Contact(){function sendEmail(e){e.preventDefault();__WEBPACK_IMPORTED_MODULE_2_emailjs_com___default.a.sendForm('service_d0x4v08','template_c9o4z5k',e.target,'user_JevN9UkvqYauxhbHDJb7J').then(function(response){__WEBPACK_IMPORTED_MODULE_3_react_toastify__["a" /* toast */].success("Your message has been successfully sent!",{position:__WEBPACK_IMPORTED_MODULE_3_react_toastify__["a" /* toast */].POSITION.BUTTOM_RIGHT,autoClose:false});console.log("SUCCESS!",response.status,response.text);},function(error){console.log(error.text);});e.target.reset();}return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section",{id:"contact",className:"relative "},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"text-center"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__heroicons_react_solid__["d" /* HomeIcon */],{className:"w-10 inline-block mb-4"}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-12"},"Get in touch!")),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("iframe",{width:"100%",height:"100%",title:"map",className:"absolute inset-0",frameBorder:0,marginHeight:0,marginWidth:0,style:{filter:"opacity(0.7)"},src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.9177793516337!2d3.291460714266957!3d6.657112423443756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b97301272d5b3%3A0x2d26aa69c5dd3673!2sBoldlinks%20Technology%20Solution!5e0!3m2!1sen!2sng!4v1629109499578!5m2!1sen!2sng"//src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"lg:w-1/2 px-6"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2",{className:"title-font font-semibold text-white tracking-widest text-xs"},"ADDRESS"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p",{className:"mt-1"},"474, Lagos-Abeokuta Exp.Way,General B/Stop, Ijaiye-Ojokoro, ",__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br",null),"Lagos, Nigeria.")),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"lg:w-1/2 px-6 mt-4 lg:mt-0"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2",{className:"title-font font-semibold text-white tracking-widest text-xs"},"EMAIL"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{className:"text-indigo-400 leading-relaxed"},"yaqub.adesola@gmail.com"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2",{className:"title-font font-semibold text-white tracking-widest text-xs mt-4"},"PHONE"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p",{className:"leading-relaxed"},"+234-816-275-4001,\xA0 +234-807-454-4422")))),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form",{onSubmit:sendEmail,netlify:true,name:"contact",className:"lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2",{className:"text-white sm:text-4xl text-3xl mb-1 font-medium title-font"},"Ask me anything"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p",{className:"leading-relaxed mb-5"},"I will get back to you shortly"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"relative mb-4"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-400"},"Name"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input",{type:"text",id:"name",name:"name",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"relative mb-4"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-400"},"Email"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input",{type:"email",id:"email",name:"email",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"relative mb-4"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-400"},"Message"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea",{id:"message",name:"message",className:"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"})),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button",{type:"submit",className:"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"},"Submit"))));}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function AcademicCapIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (AcademicCapIcon);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function AdjustmentsIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (AdjustmentsIcon);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function AnnotationIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (AnnotationIcon);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArchiveIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArchiveIcon);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowCircleDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowCircleDownIcon);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowCircleLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowCircleLeftIcon);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowCircleRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowCircleRightIcon);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowCircleUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowCircleUpIcon);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowDownIcon);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowLeftIcon);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowNarrowDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowNarrowDownIcon);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowNarrowLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowNarrowLeftIcon);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowNarrowRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowNarrowRightIcon);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowNarrowUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowNarrowUpIcon);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowRightIcon);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowSmDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowSmDownIcon);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowSmLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowSmLeftIcon);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowSmRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowSmRightIcon);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowSmUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowSmUpIcon);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowUpIcon);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ArrowsExpandIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    stroke: "#374151",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ArrowsExpandIcon);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function AtSymbolIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (AtSymbolIcon);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BackspaceIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BackspaceIcon);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BadgeCheckIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (BadgeCheckIcon);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BanIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BanIcon);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BeakerIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BeakerIcon);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BellIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BellIcon);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BookOpenIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BookOpenIcon);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BookmarkAltIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BookmarkAltIcon);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BookmarkIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BookmarkIcon);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function BriefcaseIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (BriefcaseIcon);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CakeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CakeIcon);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CalculatorIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CalculatorIcon);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CalendarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CalendarIcon);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CameraIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CameraIcon);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CashIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CashIcon);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChartBarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChartBarIcon);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChartPieIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChartPieIcon);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChartSquareBarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChartSquareBarIcon);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChatAlt2Icon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChatAlt2Icon);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChatAltIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChatAltIcon);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChatIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChatIcon);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CheckCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CheckCircleIcon);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CheckIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CheckIcon);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronDoubleDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronDoubleDownIcon);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronDoubleLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronDoubleLeftIcon);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronDoubleRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronDoubleRightIcon);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronDoubleUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronDoubleUpIcon);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronDownIcon);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronLeftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronLeftIcon);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronRightIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronRightIcon);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChevronUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ChevronUpIcon);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ChipIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M13 7H7v6h6V7z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (ChipIcon);

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ClipboardCheckIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ClipboardCheckIcon);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ClipboardCopyIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ClipboardCopyIcon);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ClipboardListIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ClipboardListIcon);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ClipboardIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ClipboardIcon);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ClockIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ClockIcon);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CloudDownloadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CloudDownloadIcon);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CloudUploadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 13h2v5a1 1 0 11-2 0v-5z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CloudUploadIcon);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CloudIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CloudIcon);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CodeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (CodeIcon);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CogIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CogIcon);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CollectionIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CollectionIcon);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ColorSwatchIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ColorSwatchIcon);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CreditCardIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CreditCardIcon);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CubeTransparentIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CubeTransparentIcon);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CubeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CubeIcon);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyBangladeshiIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyBangladeshiIcon);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyDollarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyDollarIcon);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyEuroIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyEuroIcon);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyPoundIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyPoundIcon);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyRupeeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyRupeeIcon);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CurrencyYenIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CurrencyYenIcon);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function CursorClickIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (CursorClickIcon);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DatabaseIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DatabaseIcon);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DesktopComputerIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DesktopComputerIcon);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DeviceMobileIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DeviceMobileIcon);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DeviceTabletIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DeviceTabletIcon);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentAddIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentAddIcon);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentDownloadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentDownloadIcon);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentDuplicateIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentDuplicateIcon);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentRemoveIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentRemoveIcon);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentReportIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentReportIcon);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentSearchIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentSearchIcon);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentTextIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentTextIcon);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DocumentIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentIcon);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DotsCircleHorizontalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DotsCircleHorizontalIcon);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DotsHorizontalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DotsHorizontalIcon);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DotsVerticalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DotsVerticalIcon);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DownloadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DownloadIcon);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function DuplicateIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (DuplicateIcon);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function EmojiHappyIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (EmojiHappyIcon);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function EmojiSadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (EmojiSadIcon);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ExclamationCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ExclamationCircleIcon);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ExclamationIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ExclamationIcon);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ExternalLinkIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ExternalLinkIcon);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function EyeOffIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (EyeOffIcon);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function EyeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10 12a2 2 0 100-4 2 2 0 000 4z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (EyeIcon);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FastForwardIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FastForwardIcon);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FilmIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FilmIcon);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FilterIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FilterIcon);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FingerPrintIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FingerPrintIcon);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FireIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FireIcon);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FlagIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FlagIcon);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FolderAddIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11h4m-2-2v4"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FolderAddIcon);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FolderDownloadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 9v4m0 0l-2-2m2 2l2-2"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FolderDownloadIcon);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FolderOpenIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FolderOpenIcon);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FolderRemoveIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 11h4"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FolderRemoveIcon);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function FolderIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (FolderIcon);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function GiftIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (GiftIcon);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function GlobeAltIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (GlobeAltIcon);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function GlobeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (GlobeIcon);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function HandIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (HandIcon);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function HashtagIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (HashtagIcon);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function HeartIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (HeartIcon);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function HomeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (HomeIcon);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function IdentificationIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (IdentificationIcon);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function InboxInIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (InboxInIcon);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function InboxIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (InboxIcon);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function InformationCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (InformationCircleIcon);

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function KeyIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (KeyIcon);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LibraryIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LibraryIcon);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LightBulbIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LightBulbIcon);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LightningBoltIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LightningBoltIcon);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LinkIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LinkIcon);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LocationMarkerIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LocationMarkerIcon);

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LockClosedIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LockClosedIcon);

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LockOpenIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LockOpenIcon);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LoginIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LoginIcon);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function LogoutIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (LogoutIcon);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MailOpenIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MailOpenIcon);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MailIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MailIcon);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MapIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MapIcon);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MenuAlt1Icon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MenuAlt1Icon);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MenuAlt2Icon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MenuAlt2Icon);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MenuAlt3Icon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MenuAlt3Icon);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MenuAlt4Icon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MenuAlt4Icon);

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MenuIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MenuIcon);

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MicrophoneIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MicrophoneIcon);

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MinusCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MinusCircleIcon);

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MinusSmIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MinusSmIcon);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MinusIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MinusIcon);

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MoonIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MoonIcon);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function MusicNoteIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (MusicNoteIcon);

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function NewspaperIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (NewspaperIcon);

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function OfficeBuildingIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (OfficeBuildingIcon);

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PaperAirplaneIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PaperAirplaneIcon);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PaperClipIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PaperClipIcon);

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PauseIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PauseIcon);

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PencilAltIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PencilAltIcon);

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PencilIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PencilIcon);

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PhoneIncomingIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PhoneIncomingIcon);

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PhoneMissedCallIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PhoneMissedCallIcon);

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PhoneOutgoingIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PhoneOutgoingIcon);

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PhoneIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PhoneIcon);

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PhotographIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PhotographIcon);

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PlayIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PlayIcon);

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PlusCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PlusCircleIcon);

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PlusSmIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PlusSmIcon);

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PlusIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PlusIcon);

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PresentationChartBarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PresentationChartBarIcon);

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PresentationChartLineIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PresentationChartLineIcon);

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PrinterIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PrinterIcon);

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function PuzzleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (PuzzleIcon);

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function QrcodeIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (QrcodeIcon);

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function QuestionMarkCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (QuestionMarkCircleIcon);

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ReceiptRefundIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ReceiptRefundIcon);

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ReceiptTaxIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ReceiptTaxIcon);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function RefreshIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (RefreshIcon);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ReplyIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ReplyIcon);

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function RewindIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (RewindIcon);

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function RssIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (RssIcon);

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SaveAsIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SaveAsIcon);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SaveIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SaveIcon);

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ScaleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ScaleIcon);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ScissorsIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ScissorsIcon);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SearchCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SearchCircleIcon);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SearchIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SearchIcon);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SelectorIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SelectorIcon);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ServerIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ServerIcon);

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ShareIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ShareIcon);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ShieldCheckIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ShieldCheckIcon);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ShieldExclamationIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ShieldExclamationIcon);

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ShoppingBagIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ShoppingBagIcon);

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ShoppingCartIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ShoppingCartIcon);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SortAscendingIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SortAscendingIcon);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SortDescendingIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SortDescendingIcon);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SparklesIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SparklesIcon);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SpeakerphoneIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SpeakerphoneIcon);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function StarIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (StarIcon);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function StatusOfflineIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (StatusOfflineIcon);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function StatusOnlineIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (StatusOnlineIcon);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function StopIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (StopIcon);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SunIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SunIcon);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SupportIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SupportIcon);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SwitchHorizontalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SwitchHorizontalIcon);

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function SwitchVerticalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (SwitchVerticalIcon);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TableIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TableIcon);

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TagIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TagIcon);

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TemplateIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TemplateIcon);

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TerminalIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z",
    clipRule: "evenodd"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (TerminalIcon);

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ThumbDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ThumbDownIcon);

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ThumbUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ThumbUpIcon);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TicketIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TicketIcon);

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TranslateIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TranslateIcon);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TrashIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TrashIcon);

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TrendingDownIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TrendingDownIcon);

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TrendingUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TrendingUpIcon);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function TruckIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (TruckIcon);

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UploadIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UploadIcon);

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UserAddIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UserAddIcon);

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UserCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UserCircleIcon);

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UserGroupIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UserGroupIcon);

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UserRemoveIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UserRemoveIcon);

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UserIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (UserIcon);

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function UsersIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (UsersIcon);

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function VariableIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (VariableIcon);

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function VideoCameraIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (VideoCameraIcon);

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ViewBoardsIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ViewBoardsIcon);

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ViewGridAddIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ViewGridAddIcon);

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ViewGridIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ViewGridIcon);

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ViewListIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ViewListIcon);

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function VolumeOffIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (VolumeOffIcon);

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function VolumeUpIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (VolumeUpIcon);

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function WifiIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (WifiIcon);

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function XCircleIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (XCircleIcon);

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function XIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (XIcon);

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ZoomInIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    d: "M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ZoomInIcon);

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function ZoomOutIcon(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", {
    fillRule: "evenodd",
    d: "M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z",
    clipRule: "evenodd"
  }));
}

/* unused harmony default export */ var _unused_webpack_default_export = (ZoomOutIcon);

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = exports.sendForm = exports.send = exports.init = void 0;
var EmailJSResponseStatus_1 = __webpack_require__(263);
Object.defineProperty(exports, "EmailJSResponseStatus", { enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } });
var UI_1 = __webpack_require__(264);
var _userID = null;
var _origin = 'https://api.emailjs.com';
function sendPost(url, data, headers) {
    if (headers === void 0) { headers = {}; }
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function (event) {
            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', function (event) {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));
        });
        xhr.open('POST', url, true);
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(data);
    });
}
function appendGoogleCaptcha(templatePrams) {
    var element = document && document.getElementById('g-recaptcha-response');
    if (element && element.value) {
        templatePrams['g-recaptcha-response'] = element.value;
    }
    element = null;
    return templatePrams;
}
function fixIdSelector(selector) {
    if (selector[0] !== '#' && selector[0] !== '.') {
        return '#' + selector;
    }
    return selector;
}
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
function init(userID, origin) {
    _userID = userID;
    _origin = origin || 'https://api.emailjs.com';
}
exports.init = init;
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {Object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function send(serviceID, templateID, templatePrams, userID) {
    var params = {
        lib_version: '2.6.4',
        user_id: userID || _userID,
        service_id: serviceID,
        template_id: templateID,
        template_params: appendGoogleCaptcha(templatePrams)
    };
    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
}
exports.send = send;
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function sendForm(serviceID, templateID, form, userID) {
    if (typeof form === 'string') {
        form = document.querySelector(fixIdSelector(form));
    }
    if (!form || form.nodeName !== 'FORM') {
        throw 'Expected the HTML form element or the style selector of form';
    }
    UI_1.UI.progressState(form);
    var formData = new FormData(form);
    formData.append('lib_version', '2.6.4');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', userID || _userID);
    return sendPost(_origin + '/api/v1.0/email/send-form', formData)
        .then(function (response) {
        UI_1.UI.successState(form);
        return response;
    }, function (error) {
        UI_1.UI.errorState(form);
        return Promise.reject(error);
    });
}
exports.sendForm = sendForm;
exports.default = {
    init: init,
    send: send,
    sendForm: sendForm
};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = void 0;
var EmailJSResponseStatus = /** @class */ (function () {
    function EmailJSResponseStatus(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
    return EmailJSResponseStatus;
}());
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.clearAll = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.remove(this.DONE);
        form.classList.remove(this.ERROR);
    };
    UI.progressState = function (form) {
        this.clearAll(form);
        form.classList.add(this.PROGRESS);
    };
    UI.successState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.DONE);
    };
    UI.errorState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.ERROR);
    };
    UI.PROGRESS = 'emailjs-sending';
    UI.DONE = 'emailjs-success';
    UI.ERROR = 'emailjs-error';
    return UI;
}());
exports.UI = UI;


/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Bounce */
/* unused harmony export Flip */
/* unused harmony export Slide */
/* unused harmony export ToastContainer */
/* unused harmony export Zoom */
/* unused harmony export collapseToast */
/* unused harmony export cssTransition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toast; });
/* unused harmony export useToast */
/* unused harmony export useToastContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clsx__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function isNum(v) {
  return typeof v === 'number' && !isNaN(v);
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isStr(v) {
  return typeof v === 'string';
}
function isFn(v) {
  return typeof v === 'function';
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function isToastIdValid(toastId) {
  return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function canBeRendered(content) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(content) || isStr(content) || isFn(content) || isNum(content);
}

var POSITION = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center'
};
var TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  DEFAULT: 'default',
  DARK: 'dark'
};

/**
 * Used to collapse toast after exit animation
 */
function collapseToast(node, done, duration
/* COLLAPSE_DURATION */
) {
  if (duration === void 0) {
    duration = 300;
  }

  var height = node.scrollHeight;
  var style = node.style;
  requestAnimationFrame(function () {
    style.minHeight = 'initial';
    style.height = height + 'px';
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(function () {
      style.height = '0';
      style.padding = '0';
      style.margin = '0';
      setTimeout(done, duration);
    });
  });
}

/**
 * Css animation that just work.
 * You could use animate.css for instance
 *
 *
 * ```
 * cssTransition({
 *   enter: "animate__animated animate__bounceIn",
 *   exit: "animate__animated animate__bounceOut"
 * })
 * ```
 *
 */

function cssTransition(_ref) {
  var enter = _ref.enter,
      exit = _ref.exit,
      _ref$appendPosition = _ref.appendPosition,
      appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition,
      _ref$collapse = _ref.collapse,
      collapse = _ref$collapse === void 0 ? true : _ref$collapse,
      _ref$collapseDuration = _ref.collapseDuration,
      collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
  return function ToastTransition(_ref2) {
    var children = _ref2.children,
        position = _ref2.position,
        preventExitTransition = _ref2.preventExitTransition,
        done = _ref2.done,
        nodeRef = _ref2.nodeRef,
        isIn = _ref2.isIn;
    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var baseClassName = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])();
    var animationStep = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(0
    /* Enter */
    );
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["useLayoutEffect"])(function () {
      onEnter();
    }, []);
    Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
      if (!isIn) preventExitTransition ? onExited() : onExit();
    }, [isIn]);

    function onEnter() {
      var node = nodeRef.current;
      baseClassName.current = node.className;
      node.className += " " + enterClassName;
      node.addEventListener('animationend', onEntered);
    }

    function onEntered() {
      var node = nodeRef.current;
      node.removeEventListener('animationend', onEntered);

      if (animationStep.current === 0
      /* Enter */
      ) {
          node.className = baseClassName.current;
        }
    }

    function onExit() {
      animationStep.current = 1
      /* Exit */
      ;
      var node = nodeRef.current;
      node.className += " " + exitClassName;
      node.addEventListener('animationend', onExited);
    }

    function onExited() {
      var node = nodeRef.current;
      node.removeEventListener('animationend', onExited);
      collapse ? collapseToast(node, done, collapseDuration) : done();
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, children);
  };
}

var eventManager = {
  list: /*#__PURE__*/new Map(),
  emitQueue: /*#__PURE__*/new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event, callback) {
    if (callback) {
      var cb = this.list.get(event).filter(function (cb) {
        return cb !== callback;
      });
      this.list.set(event, cb);
      return this;
    }

    this.list["delete"](event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);

    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue["delete"](event);
    }

    return this;
  },

  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this.list.has(event) && this.list.get(event).forEach(function (callback) {
      var timer = setTimeout(function () {
        // @ts-ignore
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

      _this.emitQueue.get(event).push(timer);
    });
  }
};

/**
 * `useKeeper` is a helper around `useRef`.
 *
 * You don't need to access the `.current`property to get the value
 * If refresh is set to true. The ref will be updated every render
 */

function useKeeper(arg, refresh) {
  if (refresh === void 0) {
    refresh = false;
  }

  var ref = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(arg);
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (refresh) ref.current = arg;
  });
  return ref.current;
}

function reducer(state, action) {
  switch (action.type) {
    case 0
    /* ADD */
    :
      return [].concat(state, [action.toastId]).filter(function (id) {
        return id !== action.staleId;
      });

    case 1
    /* REMOVE */
    :
      return isToastIdValid(action.toastId) ? state.filter(function (id) {
        return id !== action.toastId;
      }) : [];
  }
}

function useToastContainer(props) {
  var _useReducer = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useReducer"])(function (x) {
    return x + 1;
  }, 0),
      forceUpdate = _useReducer[1];

  var _useReducer2 = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useReducer"])(reducer, []),
      toast = _useReducer2[0],
      dispatch = _useReducer2[1];

  var containerRef = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  var toastCount = useKeeper(0);
  var queue = useKeeper([]);
  var collection = useKeeper({});
  var instance = useKeeper({
    toastKey: 1,
    displayedToast: 0,
    props: props,
    containerId: null,
    isToastActive: isToastActive,
    getToast: function getToast(id) {
      return collection[id] || null;
    }
  });
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(3
    /* WillUnmount */
    ).on(0
    /* Show */
    , buildToast).on(1
    /* Clear */
    , function (toastId) {
      return containerRef.current && removeToast(toastId);
    }).on(5
    /* ClearWaitingQueue */
    , clearWaitingQueue).emit(2
    /* DidMount */
    , instance);
    return function () {
      return eventManager.emit(3
      /* WillUnmount */
      , instance);
    };
  }, []);
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast.length;
    eventManager.emit(4
    /* Change */
    , toast.length, props.containerId);
  }, [toast]);
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    instance.props = props;
  });

  function isToastActive(id) {
    return toast.indexOf(id) !== -1;
  }

  function clearWaitingQueue(_ref) {
    var containerId = _ref.containerId;
    var limit = instance.props.limit;

    if (limit && (!containerId || instance.containerId === containerId)) {
      toastCount -= queue.length;
      queue = [];
    }
  }

  function removeToast(toastId) {
    dispatch({
      type: 1
      /* REMOVE */
      ,
      toastId: toastId
    });
  }

  function dequeueToast() {
    var _queue$shift = queue.shift(),
        toastContent = _queue$shift.toastContent,
        toastProps = _queue$shift.toastProps,
        staleId = _queue$shift.staleId;

    appendToast(toastContent, toastProps, staleId);
  }
  /**
   * check if a container is attached to the dom
   * check for multi-container, build only if associated
   * check for duplicate toastId if no update
   */


  function isNotValid(_ref2) {
    var containerId = _ref2.containerId,
        toastId = _ref2.toastId,
        updateId = _ref2.updateId;
    return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || collection[toastId] && updateId == null ? true : false;
  } // this function and all the function called inside needs to rely on ref(`useKeeper`)


  function buildToast(content, _ref3) {
    var delay = _ref3.delay,
        staleId = _ref3.staleId,
        options = _objectWithoutPropertiesLoose(_ref3, ["delay", "staleId"]);

    if (!canBeRendered(content) || isNotValid(options)) return;
    var toastId = options.toastId,
        updateId = options.updateId;
    var props = instance.props;

    var closeToast = function closeToast() {
      return removeToast(toastId);
    };

    var isNotAnUpdate = options.updateId == null;
    if (isNotAnUpdate) toastCount++;
    var toastProps = {
      toastId: toastId,
      updateId: updateId,
      isIn: false,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast: closeToast,
      closeButton: options.closeButton,
      rtl: props.rtl,
      position: options.position || props.position,
      transition: options.transition || props.transition,
      className: parseClassName(options.className || props.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props.bodyClassName),
      style: options.style || props.toastStyle,
      bodyStyle: options.bodyStyle || props.bodyStyle,
      onClick: options.onClick || props.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props.draggable,
      draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props.draggablePercent,
      draggableDirection: options.draggableDirection || props.draggableDirection,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props.progressClassName),
      progressStyle: options.progressStyle || props.progressStyle,
      autoClose: getAutoCloseDelay(options.autoClose, props.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props.role,
      deleteToast: function deleteToast() {
        removeFromCollection(toastId);
      }
    };
    if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose)) toastProps.onClose = options.onClose; //  tweak for vertical dragging

    if (toastProps.draggableDirection === "y"
    /* Y */
    && toastProps.draggablePercent === 80
    /* DRAGGABLE_PERCENT */
    ) {
        toastProps.draggablePercent *= 1.5;
      }

    var closeButton = props.closeButton;

    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
    }

    toastProps.closeButton = closeButton;
    var toastContent = content;

    if (Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(content) && !isStr(content.type)) {
      toastContent = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(content, {
        closeToast: closeToast,
        toastProps: toastProps
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast: closeToast,
        toastProps: toastProps
      });
    } // not handling limit + delay by design. Waiting for user feedback first


    if (props.limit && props.limit > 0 && toastCount > props.limit && isNotAnUpdate) {
      queue.push({
        toastContent: toastContent,
        toastProps: toastProps,
        staleId: staleId
      });
    } else if (isNum(delay) && delay > 0) {
      setTimeout(function () {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }

  function appendToast(content, toastProps, staleId) {
    var toastId = toastProps.toastId;
    if (staleId) delete collection[staleId];
    collection[toastId] = {
      content: content,
      props: toastProps
    };
    dispatch({
      type: 0
      /* ADD */
      ,
      toastId: toastId,
      staleId: staleId
    });
  }

  function removeFromCollection(toastId) {
    delete collection[toastId];
    var queueLen = queue.length;
    toastCount = isToastIdValid(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
    if (toastCount < 0) toastCount = 0;

    if (queueLen > 0) {
      var freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit;

      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;

        for (var i = 0; i < toDequeue; i++) {
          dequeueToast();
        }
      }
    } else {
      forceUpdate();
    }
  }

  function getToastToRender(cb) {
    var toastToRender = {};
    var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);

    for (var i = 0; i < toastList.length; i++) {
      var _toast = collection[toastList[i]];
      var position = _toast.props.position;
      toastToRender[position] || (toastToRender[position] = []);
      toastToRender[position].push(_toast);
    }

    return Object.keys(toastToRender).map(function (p) {
      return cb(p, toastToRender[p]);
    });
  }

  return {
    getToastToRender: getToastToRender,
    collection: collection,
    containerRef: containerRef,
    isToastActive: isToastActive
  };
}

function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}

function useToast(props) {
  var _useState = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(true),
      isRunning = _useState[0],
      setIsRunning = _useState[1];

  var _useState2 = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(false),
      preventExitTransition = _useState2[0],
      setPreventExitTransition = _useState2[1];

  var toastRef = Object(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  var drag = useKeeper({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null
  });
  var syncProps = useKeeper(props, true);
  var autoClose = props.autoClose,
      pauseOnHover = props.pauseOnHover,
      closeToast = props.closeToast,
      onClick = props.onClick,
      closeOnClick = props.closeOnClick;
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (isFn(props.onOpen)) props.onOpen(Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(props.children) && props.children.props);
    return function () {
      if (isFn(syncProps.onClose)) syncProps.onClose(Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(syncProps.children) && syncProps.children.props);
    };
  }, []);
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    props.draggable && bindDragEvents();
    return function () {
      props.draggable && unbindDragEvents();
    };
  }, [props.draggable]);
  Object(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    props.pauseOnFocusLoss && bindFocusEvents();
    return function () {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);

  function onDragStart(e) {
    if (props.draggable) {
      var toast = toastRef.current;
      drag.canCloseOnClick = true;
      drag.canDrag = true;
      drag.boundingRect = toast.getBoundingClientRect();
      toast.style.transition = '';
      drag.x = getX(e.nativeEvent);
      drag.y = getY(e.nativeEvent);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.start = drag.x;
          drag.removalDistance = toast.offsetWidth * (props.draggablePercent / 100);
        } else {
        drag.start = drag.y;
        drag.removalDistance = toast.offsetHeight * (props.draggablePercent / 100);
      }
    }
  }

  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      var _drag$boundingRect = drag.boundingRect,
          top = _drag$boundingRect.top,
          bottom = _drag$boundingRect.bottom,
          left = _drag$boundingRect.left,
          right = _drag$boundingRect.right;

      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }

  function playToast() {
    setIsRunning(true);
  }

  function pauseToast() {
    setIsRunning(false);
  }

  function bindFocusEvents() {
    if (!document.hasFocus()) pauseToast();
    window.addEventListener('focus', playToast);
    window.addEventListener('blur', pauseToast);
  }

  function unbindFocusEvents() {
    window.removeEventListener('focus', playToast);
    window.removeEventListener('blur', pauseToast);
  }

  function bindDragEvents() {
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove);
    document.addEventListener('touchend', onDragEnd);
  }

  function unbindDragEvents() {
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
  }

  function onDragMove(e) {
    if (drag.canDrag) {
      e.preventDefault();
      var toast = toastRef.current;
      if (isRunning) pauseToast();
      drag.x = getX(e);
      drag.y = getY(e);

      if (props.draggableDirection === "x"
      /* X */
      ) {
          drag.delta = drag.x - drag.start;
        } else {
        drag.delta = drag.y - drag.start;
      } // prevent false positif during a toast click


      if (drag.start !== drag.x) drag.canCloseOnClick = false;
      toast.style.transform = "translate" + props.draggableDirection + "(" + drag.delta + "px)";
      toast.style.opacity = "" + (1 - Math.abs(drag.delta / drag.removalDistance));
    }
  }

  function onDragEnd() {
    var toast = toastRef.current;

    if (drag.canDrag) {
      drag.canDrag = false;

      if (Math.abs(drag.delta) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }

      toast.style.transition = 'transform 0.2s, opacity 0.2s';
      toast.style.transform = "translate" + props.draggableDirection + "(0)";
      toast.style.opacity = '1';
    }
  }

  var eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };

  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  } // prevent toast from closing when user drags the toast


  if (closeOnClick) {
    eventHandlers.onClick = function (e) {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }

  return {
    playToast: playToast,
    pauseToast: pauseToast,
    isRunning: isRunning,
    preventExitTransition: preventExitTransition,
    toastRef: toastRef,
    eventHandlers: eventHandlers
  };
}

function CloseButton(_ref) {
  var closeToast = _ref.closeToast,
      type = _ref.type,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? 'close' : _ref$ariaLabel;
  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", {
    className: "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button " + "Toastify"
    /* CSS_NAMESPACE */
    + "__close-button--" + type,
    type: "button",
    onClick: function onClick(e) {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}

function ProgressBar(_ref) {
  var _cx, _animationEvent;

  var delay = _ref.delay,
      isRunning = _ref.isRunning,
      closeToast = _ref.closeToast,
      type = _ref.type,
      hide = _ref.hide,
      className = _ref.className,
      userStyle = _ref.style,
      controlledProgress = _ref.controlledProgress,
      progress = _ref.progress,
      rtl = _ref.rtl,
      isIn = _ref.isIn;

  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? 'running' : 'paused',
    opacity: hide ? 0 : 1
  });

  if (controlledProgress) style.transform = "scaleX(" + progress + ")";
  var defaultClassName = Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])("Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar", controlledProgress ? "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--controlled" : "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--animated", "Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__progress-bar--rtl"] = rtl, _cx));
  var classNames = isFn(className) ? className({
    rtl: rtl,
    type: type,
    defaultClassName: defaultClassName
  }) : Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])(defaultClassName, className); // 🧐 controlledProgress is derived from progress
  // so if controlledProgress is set
  // it means that this is also the case for progress

  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : function () {
    isIn && closeToast();
  }, _animationEvent); // TODO: add aria-valuenow, aria-valuemax, aria-valuemin

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", Object.assign({
    role: "progressbar",
    "aria-hidden": hide ? 'true' : 'false',
    "aria-label": "notification timer",
    className: classNames,
    style: style
  }, animationEvent));
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};

var Toast = function Toast(props) {
  var _cx;

  var _useToast = useToast(props),
      isRunning = _useToast.isRunning,
      preventExitTransition = _useToast.preventExitTransition,
      toastRef = _useToast.toastRef,
      eventHandlers = _useToast.eventHandlers;

  var closeButton = props.closeButton,
      children = props.children,
      autoClose = props.autoClose,
      onClick = props.onClick,
      type = props.type,
      hideProgressBar = props.hideProgressBar,
      closeToast = props.closeToast,
      Transition = props.transition,
      position = props.position,
      className = props.className,
      style = props.style,
      bodyClassName = props.bodyClassName,
      bodyStyle = props.bodyStyle,
      progressClassName = props.progressClassName,
      progressStyle = props.progressStyle,
      updateId = props.updateId,
      role = props.role,
      progress = props.progress,
      rtl = props.rtl,
      toastId = props.toastId,
      deleteToast = props.deleteToast,
      isIn = props.isIn;
  var defaultClassName = Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])("Toastify"
  /* CSS_NAMESPACE */
  + "__toast", "Toastify"
  /* CSS_NAMESPACE */
  + "__toast--" + type, (_cx = {}, _cx["Toastify"
  /* CSS_NAMESPACE */
  + "__toast--rtl"] = rtl, _cx));
  var cssClasses = isFn(className) ? className({
    rtl: rtl,
    position: position,
    type: type,
    defaultClassName: defaultClassName
  }) : Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])(defaultClassName, className);
  var isProgressControlled = !!progress;

  function renderCloseButton(closeButton) {
    if (!closeButton) return;
    var props = {
      closeToast: closeToast,
      type: type
    };
    if (isFn(closeButton)) return closeButton(props);
    if (Object(__WEBPACK_IMPORTED_MODULE_0_react__["isValidElement"])(closeButton)) return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(closeButton, props);
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Transition, {
    isIn: isIn,
    done: deleteToast,
    position: position,
    preventExitTransition: preventExitTransition,
    nodeRef: toastRef
  }, Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", Object.assign({
    id: toastId,
    onClick: onClick,
    className: cssClasses
  }, eventHandlers, {
    style: style,
    ref: toastRef
  }), Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", Object.assign({}, isIn && {
    role: role
  }, {
    className: isFn(bodyClassName) ? bodyClassName({
      type: type
    }) : Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-body", bodyClassName),
    style: bodyStyle
  }), children), renderCloseButton(closeButton), (autoClose || isProgressControlled) && Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ProgressBar, Object.assign({}, updateId && !isProgressControlled ? {
    key: "pb-" + updateId
  } : {}, {
    rtl: rtl,
    delay: autoClose,
    isRunning: isRunning,
    isIn: isIn,
    closeToast: closeToast,
    hide: hideProgressBar,
    type: type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: isProgressControlled,
    progress: progress
  }))));
};

var Bounce = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__bounce-exit",
  appendPosition: true
});
var Slide = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__slide-exit",
  appendPosition: true
});
var Zoom = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__zoom-exit"
});
var Flip = /*#__PURE__*/cssTransition({
  enter: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-enter",
  exit: "Toastify"
  /* CSS_NAMESPACE */
  + "--animate " + "Toastify"
  /* CSS_NAMESPACE */
  + "__flip-exit"
});

var ToastContainer = function ToastContainer(props) {
  var _useToastContainer = useToastContainer(props),
      getToastToRender = _useToastContainer.getToastToRender,
      containerRef = _useToastContainer.containerRef,
      isToastActive = _useToastContainer.isToastActive;

  var className = props.className,
      style = props.style,
      rtl = props.rtl,
      containerId = props.containerId;

  function getClassName(position) {
    var _cx;

    var defaultClassName = Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])("Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container", "Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--" + position, (_cx = {}, _cx["Toastify"
    /* CSS_NAMESPACE */
    + "__toast-container--rtl"] = rtl, _cx));
    return isFn(className) ? className({
      position: position,
      rtl: rtl,
      defaultClassName: defaultClassName
    }) : Object(__WEBPACK_IMPORTED_MODULE_1_clsx__["a" /* default */])(defaultClassName, parseClassName(className));
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", {
    ref: containerRef,
    className: "Toastify"
    /* CSS_NAMESPACE */
    ,
    id: containerId
  }, getToastToRender(function (position, toastList) {
    var containerStyle = toastList.length === 0 ? _extends({}, style, {
      pointerEvents: 'none'
    }) : _extends({}, style);
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", {
      className: getClassName(position),
      style: containerStyle,
      key: "container-" + position
    }, toastList.map(function (_ref) {
      var content = _ref.content,
          toastProps = _ref.props;
      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Toast, Object.assign({}, toastProps, {
        isIn: isToastActive(toastProps.toastId),
        key: "toast-" + toastProps.key,
        closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
      }), content);
    }));
  }));
};
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80
  /* DRAGGABLE_PERCENT */
  ,
  draggableDirection: "x"
  /* X */
  ,
  role: 'alert'
};

var containers = /*#__PURE__*/new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue = [];
var lazy = false;
/**
 * Check whether any container is currently mounted in the DOM
 */

function isAnyContainerMounted() {
  return containers.size > 0;
}
/**
 * Get the toast by id, given it's in the DOM, otherwise returns null
 */


function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = containers.get(containerId || latestInstance);
  if (!container) return null;
  return container.getToast(toastId);
}
/**
 * Generate a random toastId
 */


function generateToastId() {
  return Math.random().toString(36).substr(2, 9);
}
/**
 * Generate a toastId or use the one provided
 */


function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }

  return generateToastId();
}
/**
 * If the container is not mounted, the toast is enqueued and
 * the container lazy mounted
 */


function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(0
    /* Show */
    , content, options);
  } else {
    queue.push({
      content: content,
      options: options
    });

    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement('div');
      document.body.appendChild(containerDomNode);
      Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
    }
  }

  return options.toastId;
}
/**
 * Merge provided options with the defaults settings and generate the toastId
 */


function mergeOptions(type, options) {
  return _extends({}, options, {
    type: options && options.type || type,
    toastId: getToastId(options)
  });
}

var createToastByType = function createToastByType(type) {
  return function (content, options) {
    return dispatchToast(content, mergeOptions(type, options));
  };
};

var toast = function toast(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};

toast.success = /*#__PURE__*/createToastByType(TYPE.SUCCESS);
toast.info = /*#__PURE__*/createToastByType(TYPE.INFO);
toast.error = /*#__PURE__*/createToastByType(TYPE.ERROR);
toast.warning = /*#__PURE__*/createToastByType(TYPE.WARNING);
toast.dark = /*#__PURE__*/createToastByType(TYPE.DARK);
toast.warn = toast.warning;
/**
 * Remove toast programmaticaly
 */

toast.dismiss = function (id) {
  return eventManager.emit(1
  /* Clear */
  , id);
};
/**
 * Clear waiting queue when limit is used
 */


toast.clearWaitingQueue = function (params) {
  if (params === void 0) {
    params = {};
  }

  return eventManager.emit(5
  /* ClearWaitingQueue */
  , params);
};
/**
 * return true if one container is displaying the toast
 */


toast.isActive = function (id) {
  var isToastActive = false;
  containers.forEach(function (container) {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};

toast.update = function (toastId, options) {
  if (options === void 0) {
    options = {};
  }

  // if you call toast and toast.update directly nothing will be displayed
  // this is why I defered the update
  setTimeout(function () {
    var toast = getToast(toastId, options);

    if (toast) {
      var oldOptions = toast.props,
          oldContent = toast.content;

      var nextOptions = _extends({}, oldOptions, options, {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });

      if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
      var content = nextOptions.render || oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
/**
 * Used for controlled progress bar.
 */


toast.done = function (id) {
  toast.update(id, {
    progress: 1
  });
};
/**
 * Track changes. The callback get the number of toast displayed
 *
 */


toast.onChange = function (callback) {
  if (isFn(callback)) {
    eventManager.on(4
    /* Change */
    , callback);
  }

  return function () {
    isFn(callback) && eventManager.off(4
    /* Change */
    , callback);
  };
};
/**
 * Configure the ToastContainer when lazy mounted
 */


toast.configure = function (config) {
  if (config === void 0) {
    config = {};
  }

  lazy = true;
  containerConfig = config;
};

toast.POSITION = POSITION;
toast.TYPE = TYPE;
/**
 * Wait until the ToastContainer is mounted to dispatch the toast
 * and attach isActive method
 */

eventManager.on(2
/* DidMount */
, function (containerInstance) {
  latestInstance = containerInstance.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach(function (item) {
    eventManager.emit(0
    /* Show */
    , item.content, item.options);
  });
  queue = [];
}).on(3
/* WillUnmount */
, function (containerInstance) {
  containers["delete"](containerInstance.containerId || containerInstance);

  if (containers.size === 0) {
    eventManager.off(0
    /* Show */
    ).off(1
    /* Clear */
    ).off(5
    /* ClearWaitingQueue */
    );
  }

  if (canUseDom && containerDomNode) {
    document.body.removeChild(containerDomNode);
  }
});


//# sourceMappingURL=react-toastify.esm.js.map


/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),
/* 267 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function Navbar(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{id:"about"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",null,"\xA0",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",null)," \xA0",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",null)," \xA0",__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br",null)),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section",{id:"navbar_first",className:"my_sticky"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav",{className:"relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{className:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white",href:"#about"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{alt:"Yaqub Signature",style:{borderRadius:"20px",border:"2px solid black "},src:"./yaqub_logo.png"})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button",{className:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"block relative w-6 h-px rounded-sm bg-white"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"block relative w-6 h-px rounded-sm bg-white mt-1"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"block relative w-6 h-px rounded-sm bg-white mt-1"}))),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"lg:flex flex-grow items-center",id:"example-navbar-warning"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul",{className:"flex flex-col lg:flex-row list-none ml-auto"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li",{className:"nav-item"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",href:"#about"},"About")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li",{className:"nav-item"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li",{className:"nav-item"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",href:"#skills"},"Skills")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li",{className:"nav-item"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",href:"#projects"},"Portfolio")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li",{className:"nav-item"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",href:"#testimonials"},"Testimonials")),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li",{className:"nav-item"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",href:"#contact"},"Contact"))))))));}/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Project;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heroicons_react_solid__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(7);
function Project(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section",{id:"projects",className:"text-gray-400 bg-gray-900 body-font"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"container px-5 py-10 mx-auto text-center lg:px-40"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"flex flex-col w-full mb-20"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__heroicons_react_solid__["c" /* CodeIcon */],{className:"mx-auto inline-block w-10 mb-4"}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1",{className:"sm:text-4xl text-3xl font-medium title-font mb-4 text-white"},"Apps I've Built"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base"},"Just like I have said, I love building amazing apps.",__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br",null),"Feel free to check out of my recent apps")),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"flex flex-wrap -m-4"},__WEBPACK_IMPORTED_MODULE_2__data__["a" /* projects */].map(function(project){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a",{href:project.link,key:project.image,target:"_blank",className:"sm:w-1/2 w-100 p-4"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"flex relative"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img",{alt:"gallery",className:"absolute inset-0 w-full h-full object-cover object-center",src:project.image,width:"1000",height:"500"}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2",{className:"tracking-widest text-sm title-font font-medium text-green-400 mb-1"},project.subtitle),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1",{className:"title-font text-lg font-medium text-white mb-3"},project.title),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p",{className:"leading-relaxed"},project.description))));}))));}

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Skills;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heroicons_react_solid__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(7);
// src/components/Skills.js
function Skills(){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section",{id:"skills"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"container px-5 py-10 mx-auto"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"text-center mb-20"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__heroicons_react_solid__["b" /* ChipIcon */],{className:"w-10 inline-block mb-4"}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-4"},"Skills & Technologies"),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"},"Ask me anything within my stack")),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"},__WEBPACK_IMPORTED_MODULE_2__data__["b" /* skills */].map(function(skill){return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{key:skill,className:"p-2 sm:w-1/2 w-full"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div",{className:"bg-gray-800 rounded flex p-4 h-full items-center"},__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__heroicons_react_solid__["a" /* BadgeCheckIcon */],{className:"text-green-400 w-6 h-6 flex-shrink-0 mr-4"}),__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span",{className:"title-font font-medium text-white"},skill)));}))));}

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Testimonials;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heroicons_react_solid__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(7);
function Testimonials(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section",{id:"testimonials"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"container px-5 py-10 mx-auto text-center"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__heroicons_react_solid__["f" /* UsersIcon */],{className:"w-10 inline-block mb-4"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1",{className:"sm:text-4xl text-3xl font-medium title-font text-white mb-12"},"Client Testimonials"),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"flex flex-wrap m-4"},__WEBPACK_IMPORTED_MODULE_2__data__["c" /* testimonials */].map(function(testimonial){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"p-4 md:w-1/2 w-full"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"h-full bg-gray-800 bg-opacity-40 p-8 rounded"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__heroicons_react_solid__["e" /* TerminalIcon */],{className:"block w-8 text-gray-500 mb-4"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p",{className:"leading-relaxed mb-6"},testimonial.quote),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div",{className:"inline-flex items-center"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",{alt:"testimonial",src:testimonial.image,className:"w-12 rounded-full flex-shrink-0 object-cover object-center"}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"flex-grow flex flex-col pl-4"},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"title-font font-medium text-white"},testimonial.name),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span",{className:"text-gray-500 text-sm uppercase"},testimonial.company)))));}))));}

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;

var _Link = __webpack_require__(273);

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__(279);

var _Button2 = _interopRequireDefault(_Button);

var _Element = __webpack_require__(280);

var _Element2 = _interopRequireDefault(_Element);

var _scroller = __webpack_require__(3);

var _scroller2 = _interopRequireDefault(_scroller);

var _scrollEvents = __webpack_require__(11);

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _scrollSpy = __webpack_require__(9);

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _animateScroll = __webpack_require__(14);

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollLink = __webpack_require__(8);

var _scrollLink2 = _interopRequireDefault(_scrollLink);

var _scrollElement = __webpack_require__(16);

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _Helpers = __webpack_require__(281);

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(8);

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function defaultEasing(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function linear(x) {
    return x;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(x) {
    return x * (2 - x);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(x) {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  // decelerating to zero velocity π
  easeOutCubic: function easeOutCubic(x) {
    return --x * x * x + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(x) {
    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(x) {
    return 1 - --x * x * x * x;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(x) {
    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(x) {
    return 1 + --x * x * x * x * x;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(x) {
    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
  }
};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(10);

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports.default = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(278);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(8);

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(16);

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(1);

var utils = __webpack_require__(4);
var scrollSpy = __webpack_require__(9);
var defaultScroller = __webpack_require__(3);
var PropTypes = __webpack_require__(5);
var scrollHash = __webpack_require__(15);

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool,
  spyThrottle: PropTypes.number
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer, this.props.spyThrottle);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (this.props.name !== prevProps.name) {
            this.registerElems(this.props.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.alanBtn = factory();
  }
}(this, function() {
(function (ns) {
    "use strict";

    function testSocket() {
        return new Promise(function (resolve, reject) {
            var socketUrl = 'wss://javascript.info/article/websocket/chat/ws';
            console.log('[WS]: Start testing');
            console.log('[WS]: Connecting to ' + socketUrl);

            try {
                var socket = new WebSocket(socketUrl);
                socket.onopen = function (e) {
                    var testMsg = 'test-msg';
                    console.log('[WS]: Connection established');
                    console.log('[WS]: Sending data to socket, msg: ' + testMsg);
                    socket.send(testMsg);
                };

                socket.onmessage = function (event) {
                    console.log('[WS]: Data received from server: ' + event.data);
                    console.log('[WS]: Finish testing - OK');
                    resolve();
                };

                socket.onerror = function (error) {
                    console.log('[WS]: ', error.message);
                    console.log('[WS]: Finish testing - ERROR');
                    reject();
                };
            }
            catch (err) {
                console.log('[WS]: ', err);
                reject();
            }
        });
    }
    function testWorker() {
        return new Promise(function (resolve, reject) {
            console.log("[WebWorker]: Start testing");
            if (typeof (Worker) !== "undefined") {
                console.log('[WebWorker]: Has Web Worker support');

                try {
                    var myWorker = new Worker(window.URL.createObjectURL(new Blob(["onmessage = function(e) {console.log('[WebWorker]: Message received from main script');var workerResult = e.data[0];console.log('[WebWorker]: Posting message back to main script');postMessage(workerResult);}"])));
                    myWorker.onmessage = function (e) {
                        console.log('[WebWorker]: Message received from worker: ', e.data);
                        console.log('[WebWorker]: Finish testing - OK');
                        resolve();
                    }

                    myWorker.onerror = function (err) {
                        console.error('[WebWorker]: Finish testing - ERROR');
                        reject();
                    }
                    myWorker.postMessage(['test-msg']);
                } catch (err) {
                    console.error('[WebWorker]: Finish testing - ERROR');
                    reject();
                }
            } else {
                console.log('[WebWorker]: No Web Worker support');
                reject();
            }
        });
    }

    function testOrignSecure() {
        return new Promise(function (resolve, reject) {
            console.log("[ORIGN]: Start testing");
            var protocol = window.location.protocol;
            var hostname = window.location.hostname;

            if (protocol === 'https:' || protocol === 'file:' || (protocol === 'http:' && (hostname.indexOf('localhost') > -1 || hostname.indexOf('127.0.0.1') > -1))) {
                console.log('[ORIGN]: Secure');
                console.log('[ORIGN]: Finish testing - OK');
                resolve();
            } else {
                console.log('[ORIGN]: Not secure');
                console.log('[ORIGN]: Finish testing - ERROR');
                reject();
            }
        });
    }

    function testAudioContext() {
        return new Promise(function (resolve, reject) {
            console.log("[AUDIO CONTEXT]: Start testing");
            var fakeGetUserMedia = (navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia ||
                (navigator.mediaDevices && navigator.mediaDevices.getUserMedia));

            var fakeContext = window.AudioContext ||
                window.webkitAudioContext ||
                window.mozAudioContext;

            if (fakeGetUserMedia && fakeContext) {
                console.log('[AUDIO CONTEXT]: Audio supported');
                console.log('[AUDIO CONTEXT]: Finish testing - OK');
                resolve();
            } else {
                console.log('[AUDIO CONTEXT]: Audio NOT supported');
                console.log('[AUDIO CONTEXT DETAILS]:', getAudioDebugInfo());
                console.log('[AUDIO CONTEXT]: Finish testing - ERROR');
                reject();
            }
        });
    }

    function getAudioDebugInfo() {
        var info = '';

        info += 'getUserMedia: ';
        info += navigator.getUserMedia ? '1' : '0';
        info += ', ';

        info += 'mediaDevices: ';
        info += (navigator.mediaDevices) ? '1' : '0';
        info += ', ';

        info += 'mediaDevices.getUserMedia: ';
        info += (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) ? '1' : '0';
        info += ', ';

        info += 'webkitGUM: ';
        info += navigator.webkitGetUserMedia ? '1' : '0';
        info += ', ';

        info += 'mozGUM: ';
        info += navigator.mozGetUserMedia ? '1' : '0';
        info += ', ';

        info += 'msGUM: ';
        info += navigator.msGetUserMedia ? '1' : '0';
        info += '\n';

        info += 'window: \n';

        info += 'AudioContext: ';
        info += window.AudioContext ? '1' : '0';
        info += ', ';

        info += 'webkitAC: ';
        info += window.webkitAudioContext ? '1' : '0';
        info += ', ';

        info += 'mozAC: ';
        info += window.mozAudioContext ? '1' : '0';
        info += '\n';

        info += 'userAgent: ';
        info += navigator.userAgent;

        return info;
    }

    function testAll() {
        var that = this;
        var allTests = Object.keys(this);

        function getNextTest(nextTestName) {
            return that[nextTestName]();
        }

        allTests = allTests.filter(name => name !== 'run' && name !== 'getAudioDebugInfo')

        return allTests.reduce((prevPromise, nextTestName) => {
            return prevPromise.then(() => {
                return getNextTest(nextTestName);
            });
        }, Promise.resolve());
    }

    ns.alanDiagnostic = {
        testSocket: testSocket,
        testWorker: testWorker,
        testOrignSecure: testOrignSecure,
        testAudioContext: testAudioContext,
        getAudioDebugInfo: getAudioDebugInfo,
        run: testAll
    };

})(window);

(function(ns) {
    "use strict";

    var host = 'studio.alan.app';

    var config = {
        // baseURL: (window.location.protocol === "https:" ? "wss://" : "ws://") +
        baseURL: "wss://" +
            ((host.indexOf('$') === 0 || host === '') ? window.location.hostname : host ),
        codec: 'opus',
        version: '2.0.45',
        platform: 'web',
    };

    function ConnectionWrapper() {
        var _this = this;
        this._worker = new Worker(window.URL.createObjectURL(new Blob(["(function(ns) {\n    'use strict';\n\n    var SENT_TS    = 1;\n    var REMOTE_TS  = 2;\n    var TIMESTAMP  = 3;\n    var AUDIO_DATA = 4;\n    var JSON_DATA  = 5;\n\n    AlanFrame.fields = [\n        propUint64(SENT_TS,   'sentTs'),\n        propUint64(REMOTE_TS, 'remoteTs'),\n        propUint64(TIMESTAMP, 'timestamp'),\n        propBytes(AUDIO_DATA, 'audioData'),\n        propJson(JSON_DATA,   'jsonData'),\n    ];\n\n    function AlanFrameProp(type, name, sizeF, readF, writeF) {\n        this.type   = type;\n        this.name   = name;\n        this.sizeF  = sizeF;\n        this.writeF = writeF;\n        this.readF  = readF;\n    }\n\n    function fixedSize(size) {\n        return function() {\n            return size;\n        }\n    }\n\n    function bufferSize(buffer) {\n        return 4 + byteLength(buffer);\n    }\n\n    function writeUIntN(uint8array, value, nBytes, offset) {\n        for (var i = 0; i < nBytes; i++ ) {\n            uint8array[offset + i] = 0xFF & value;\n            value /= 256;\n        }\n    }\n\n    function readUIntN(uint8array, nBytes, offset) {\n        var r = 0;\n        for (var i = nBytes - 1; i >= 0; i-- ) {\n            r *= 256;\n            r += 0xFF & uint8array[offset + i];\n        }\n        return r;\n    }\n\n    function writeUInt64(uint8array, value, offset) {\n        writeUIntN(uint8array, value, 8, offset);\n    }\n\n    function readUInt64(uint8array, offset) {\n        return readUIntN(uint8array, 8, offset);\n    }\n\n    function writeUInt32(uint8array, value, offset) {\n        writeUIntN(uint8array, value, 4, offset);\n    }\n\n    function readUInt32(uint8array, offset) {\n        return readUIntN(uint8array, 4, offset);\n    }\n\n    function writeBuffer(uint8array, buffer, offset) {\n        buffer = toUint8(buffer);\n        writeUInt32(uint8array, buffer.length, offset);\n        for (var i = 0; i < buffer.length; i++ ) {\n            uint8array[offset + 4 + i] = buffer[i];\n        }\n    }\n\n    function readBuffer(uint8array, offset) {\n        var size = readUInt32(uint8array, offset);\n        if (size > 1024 * 1024) {\n            throw new Error('buffer too big');\n        }\n        return uint8array.subarray(offset + 4, offset + 4 + size);\n    }\n\n    function readUTF8(uint8array, offset) {\n        var size = readUInt32(uint8array, offset);\n        if (size > 1024 * 1024) {\n            throw new Error('string too big');\n        }\n        return String.fromCharCode.apply(null, uint8array.slice(offset + 4, offset + 4 + size));\n    }\n\n    function writeUTF8(uint8array, string, offset) {\n        writeUInt32(uint8array, string.length, offset);\n        for (var i = 0; i < string.length; i++ ) {\n            uint8array[offset + 4 + i] = string.charCodeAt(i);\n        }\n    }\n\n    function sizeUTF8(string) {\n        return 4 + string.length;\n    }\n\n    function propUint32(type, name) {\n        return new AlanFrameProp(type, name, fixedSize(4), readUInt32, writeUInt32);\n    }\n\n    function propUint64(type, name) {\n        return new AlanFrameProp(type, name, fixedSize(8), readUInt64, writeUInt64);\n    }\n\n    function propBytes(type, name) {\n        return new AlanFrameProp(type, name, bufferSize, readBuffer, writeBuffer);\n    }\n\n    function propJson(type, name) {\n        return new AlanFrameProp(type, name, sizeUTF8, readUTF8, writeUTF8);\n    }\n\n    AlanFrame.fieldByType = function(type) {\n        for (var i = 0; i < AlanFrame.fields.length; i++ ) {\n            var frame = AlanFrame.fields[i];\n            if (frame.type === type) {\n                return frame;\n            }\n        }\n        throw new Error('invalid field: ' + type);\n    };\n\n    function AlanFrame() {\n        this.version = 1;\n    }\n\n    AlanFrame.prototype.write = function() {\n        var result = new Uint8Array(this.writeSize());\n        var offset = 1;\n        result[0]  = 1;\n        for (var i = 0; i < AlanFrame.fields.length; i++ ) {\n            var field = AlanFrame.fields[i];\n            var value = this[field.name];\n            if (value) {\n                result[offset++] = field.type;\n                field.writeF(result, value, offset);\n                offset += field.sizeF(value);\n            }\n        }\n        return result.buffer;\n    };\n\n    /**\n     * @returns UInt8Array\n     */\n    AlanFrame.prototype.writeSize = function() {\n        var size = 1;\n        for (var i = 0; i < AlanFrame.fields.length; i++ ) {\n            var field = AlanFrame.fields[i];\n            var value = this[field.name];\n            if (value) {\n                size += 1 + field.sizeF(value);\n            }\n        }\n        return size;\n    };\n\n    AlanFrame.prototype.toString = function() {\n        var first = true, str = '';\n        for (var k in this) {\n            if (this.hasOwnProperty(k)) {\n                if (first) {\n                    str += k + ' = ';\n                    first = false;\n                } else {\n                    str += ', ' + k + ' = ';\n                }\n                var v = this[k];\n                if (typeof(v) === 'object') {\n                    str += 'bytes[' + byteLength(v) + ']';\n                } else {\n                    str += v;\n                }\n            }\n        }\n        return str;\n    };\n\n    function byteLength(b) {\n        if (b instanceof Uint8Array) {\n            return b.length;\n        }\n        if (b instanceof ArrayBuffer) {\n            return b.byteLength;\n        }\n    }\n\n    function toArrayBuffer(buffer) {\n        if (buffer instanceof ArrayBuffer) {\n            return buffer;\n        }\n        return buffer.buffer;\n    }\n\n    function toUint8(buffer) {\n        if (buffer instanceof Uint8Array) {\n            return buffer;\n        }\n        if (buffer instanceof ArrayBuffer) {\n            return new Uint8Array(buffer);\n        }\n        throw new Error('invalid buffer type');\n    }\n\n    function parse(uint8array) {\n        uint8array = toUint8(uint8array);\n        var r = new AlanFrame();\n        var offset = 0;\n        r.version = uint8array[offset++];\n        while (offset < uint8array.length) {\n            var frame = AlanFrame.fieldByType(uint8array[offset++]);\n            r[frame.name] = frame.readF(uint8array, offset);\n            offset += frame.sizeF(r[frame.name]);\n        }\n        return r;\n    }\n\n    ns.create = function() {\n        return new AlanFrame();\n    };\n\n    ns.parse = parse;\n\n})(typeof(window)            !== 'undefined' ? (function() {window.alanFrame = {}; return window.alanFrame; })() :\n   typeof(WorkerGlobalScope) !== 'undefined' ? (function() {alanFrame = {}; return alanFrame; })() :\n   exports);\n\n\n'use strict';\n\nvar ALAN_OFF       = 'off';\nvar ALAN_SPEAKING  = 'speaking';\nvar ALAN_LISTENING = 'listening';\n\nfunction ConnectionImpl(config, auth, mode) {\n    var _this = this;\n    this._config = config;\n    this._auth = auth;\n    this._mode = mode;\n    this._projectId = config.projectId;\n    this._url = config.url;\n    this._connected = false;\n    this._authorized = false;\n    this._dialogId = null;\n    this._callId = 1;\n    this._callSent = {};\n    this._callWait = [];\n    this._failed = false;\n    this._closed = false;\n    this._reconnectTimeout = 100;\n    this._cleanups = [];\n    this._format = null;\n    this._formatSent = false;\n    this._frameQueue = [];\n    this._remoteSentTs = 0;\n    this._remoteRecvTs = 0;\n    this._rtt = 25;\n    this._rttAlpha = 1./16;\n    this._alanState = ALAN_OFF;\n    this._sendTimer = setInterval(_this._flushQueue.bind(_this), 50);\n    this._visualState = {};\n    this._addCleanup(function() {clearInterval(_this._sendTimer);});\n    this._connect();\n    console.log('Alan: connection created: ' + this._url);\n}\n\nConnectionImpl.prototype._addCleanup = function(f) {\n    this._cleanups.push(f);\n};\n\nConnectionImpl.prototype._onConnectStatus = function(s) {\n    console.log('Alan: connection status: ' + s);\n    this._fire('connectStatus', s);\n};\n\nConnectionImpl.prototype._fire = function(event, object) {\n    if (event === 'options') {\n        if (object.versions) {\n            object.versions['alanbase:web'] = this._config.version;\n        }\n    }\n    postMessage(['fireEvent', event, object]);\n};\n\nConnectionImpl.prototype._connect = function() {\n    var _this = this;\n    if (this._socket) {\n        console.error('socket is already connected');\n        return;\n    }\n    console.log('Alan: connecting to ' + this._url);\n    this._socket = new WebSocket(this._url);\n    this._socket.binaryType = 'arraybuffer';\n    this._socket.onopen = function(e) {\n        console.info('Alan: connected', e.target === _this._socket);\n        _this._connected = true;\n        _this._reconnectTimeout = 100;\n        _this._fire('connection', {status: 'connected'});\n        if (_this._auth) {\n            _this._fire('connection', {status: 'authorizing'});\n            _this._callAuth();\n        } else {\n            _this._callWait.forEach(function(c) {  _this._sendCall(c); });\n            _this._callWait = [];\n        }\n    };\n    this._socket.onmessage = function(msg) {\n        if (msg.data instanceof ArrayBuffer) {\n            var f = alanFrame.parse(msg.data);\n            if (f.sentTs > 0) {\n                _this._remoteSentTs = f.sentTs;\n                _this._remoteRecvTs = Date.now();\n            } else {\n                _this._remoteSentTs = null;\n                _this._remoteRecvTs = null;\n            }\n            var rtt = 0;\n            if (f.remoteTs) {\n                rtt = Date.now() - f.remoteTs;\n            }\n            _this._rtt = _this._rttAlpha * rtt  + (1 - _this._rttAlpha) * _this._rtt;\n            var uint8 = new Uint8Array(f.audioData);\n            var frame = [];\n            var batch = 10000;\n            for (var offset = 0; offset < uint8.byteLength; offset += batch) {\n                var b = uint8.subarray(offset, Math.min(uint8.byteLength, offset + batch));\n                let a = String.fromCharCode.apply(null, b);\n                frame.push(a);\n            }\n            frame = frame.join('');\n            postMessage(['alanAudio', 'playFrame', frame]);\n        } else if (typeof(msg.data) === 'string') {\n            msg = JSON.parse(msg.data);\n            if (msg.i) {\n                var c = _this._callSent[msg.i];\n                delete _this._callSent[msg.i];\n                if (c && c.callback) {\n                    c.callback(msg.e, msg.r);\n                }\n            } else if (msg.e) {\n                if (msg.e === 'text') {\n                    postMessage(['alanAudio', 'playText', msg.p]);\n                } else if (msg.e === 'showPopup') {\n                    postMessage(['alanAudio', 'showPopup', msg.p]);\n                } else if (msg.e === 'command') {\n                    postMessage(['alanAudio', 'playCommand', msg.p]);\n                } else if (msg.e === 'inactivity') {\n                    postMessage(['alanAudio', 'stop']);\n                } else {\n                    _this._fire(msg.e, msg.p);\n                }\n            }\n        } else {\n            console.error('invalid message type');\n        }\n    };\n    this._socket.onerror = function(evt) {\n        console.error('Alan: connection closed due to error: ', evt);\n    };\n    this._socket.onclose = function(evt) {\n        console.info('Alan: connection closed');\n        _this._connected = false;\n        _this._authorized = false;\n        _this._socket = null;\n        _this._onConnectStatus('disconnected');\n        if (!_this._failed && _this._reconnectTimeout && !_this._closed) {\n            console.log('Alan: reconnecting in %s ms.', _this._reconnectTimeout);\n            _this._reConnect = setTimeout(_this._connect.bind(_this), _this._reconnectTimeout);\n            if (_this._reconnectTimeout < 3000) {\n                _this._reconnectTimeout *= 2;\n            } else {\n                _this._reconnectTimeout += 500;\n            }\n            _this._reconnectTimeout = Math.min(7000, _this._reconnectTimeout);\n        }\n    };\n    this._addCleanup(function() {\n        if (this._socket) {\n            this._socket.close();\n            this._socket = null;\n        }\n    });\n};\n\nConnectionImpl.prototype._callAuth = function() {\n    var _this = this;\n    var callback = function(err, r) {\n        if (!err && r.status === 'authorized') {\n            _this._authorized = true;\n            _this._formatSent = false;\n            if (r.dialogId) {\n                postMessage(['setDialogId', r.dialogId]);\n                _this._dialogId = r.dialogId;\n            }\n            _this._onAuthorized();\n            _this._onConnectStatus('authorized');\n        } else if (err === 'auth-failed') {\n            _this._onConnectStatus('auth-failed');\n            if (_this._socket) {\n                _this._socket.close();\n                _this._socket = null;\n                _this._failed = true;\n            }\n        } else {\n            _this._onConnectStatus('invalid-auth-response');\n            console.log('Alan: invalid auth response', err, r);\n        }\n    };\n    var authParam = this._auth;\n    authParam.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;\n    if (this._dialogId) {\n        authParam.dialogId = this._dialogId;\n    }\n    authParam.mode = this._mode;\n    this._sendCall({cid: this._callId++, method: '_auth_', callback: callback, param: authParam});\n    return this;\n};\n\nConnectionImpl.prototype._sendCall = function(call) {\n    this._sendFormatIfNeeded(false);\n    this._socket.send(JSON.stringify({i: call.cid, m: call.method, p: call.param}));\n    if (call.callback) {\n        this._callSent[call.cid] = call;\n    }\n};\n\nConnectionImpl.prototype._onAuthorized = function() {\n    console.log('Alan: authorized');\n    var _this = this;\n    this._callWait.forEach(function(c) {\n        _this._sendCall(c);\n    });\n    this._callWait = [];\n};\n\nConnectionImpl.prototype.close = function() {\n    for (var i = 0; i < this._cleanups.length; i++ ) {\n        this._cleanups[i]();\n    }\n    this._cleanups = [];\n    this._closed = true;\n    \n    if (this._socket && (this._socket.readyState === WebSocket.OPEN || this._socket.readyState === WebSocket.CONNECTING)) {\n        this._socket.close();\n        this._socket = null;\n    }\n    console.log('Alan: closed connection to: ' + this._url);\n    //close(); TODO: delete it!\n};\n\nConnectionImpl.prototype.call = function(cid, method, param) {\n    var call = {cid: cid, method: method, param: param, callback: function(err, obj) {\n        if (cid) {\n            postMessage(['callback', cid, err, obj]);\n        }\n    }};\n    if (this._authorized || this._connected && !this._auth) {\n        this._sendCall(call);\n    } else {\n        this._callWait.push(call);\n    }\n};\n\nConnectionImpl.prototype.setVisual = function(state) {\n    this._visualState = state;\n    this.call(null, '_visual_', state);\n};\n\nConnectionImpl.prototype._sendFrame = function(frame) {\n    if (!this._socket) {\n        console.error('sendFrame to closed socket');\n        return;\n    }\n    frame.sentTs = Date.now();\n    if (this._remoteSentTs > 0 && this._remoteRecvTs > 0) {\n        frame.remoteTs = this._remoteSentTs + Date.now() - this._remoteRecvTs;\n    }\n    this._socket.send(frame.write());\n};\n\nConnectionImpl.prototype._listen = function() {\n    var f = alanFrame.create();\n    f.jsonData = JSON.stringify({signal: 'listen'});\n    this._frameQueue.push(f);\n    this._alanState = ALAN_LISTENING;\n};\n\nConnectionImpl.prototype._stopListen = function() {\n    var f = alanFrame.create();\n    f.jsonData = JSON.stringify({signal: 'stopListen'});\n    this._frameQueue.push(f);\n    this._alanState = ALAN_OFF;\n};\n\nConnectionImpl.prototype._onAudioFormat = function(format) {\n    console.log('_onAudioFormat', format);\n    this._formatSent = false;\n    this._format = format;\n};\n\nConnectionImpl.prototype._onMicFrame = function(sampleRate, frame) {\n    if (this._alanState === ALAN_SPEAKING) {\n        return;\n    }\n    if (this._alanState === ALAN_OFF) {\n        this._listen();\n    }\n    if (this._alanState !== ALAN_LISTENING) {\n        console.error('invalid alan state: ' + this._alanState);\n        return;\n    }\n    this._sendFormatIfNeeded(true);\n    var f = alanFrame.create();\n    f.audioData = frame;\n    this._frameQueue.push(f);\n};\n\nConnectionImpl.prototype._sendFormatIfNeeded = function(inQueue) {\n    if (!this._format || this._formatSent) {\n        return;\n    }\n    this._formatSent = true;\n    var f = alanFrame.create();\n    f.jsonData = JSON.stringify({format: this._format});\n    if (inQueue) {\n        this._frameQueue.push(f);\n    } else {\n        this._sendFrame(f);\n    }\n};\n\nConnectionImpl.prototype._flushQueue = function() {\n    if (!this._socket || !this._connected) {\n        var d = 0;\n        while (this._frameQueue.length > 100 && !this._frameQueue[0].jsonData) {\n            this._frameQueue.shift();\n            d++;\n        }\n        if (d > 0) {\n            console.error('dropped: %s, frames', d);\n        }\n        return;\n    }\n    while (this._frameQueue.length > 0 && this._socket && this._socket.bufferedAmount < 64 * 1024) {\n        this._sendFrame(this._frameQueue.shift());\n    }\n};\n\nfunction connectProject(config, auth, mode) {\n    var c = new ConnectionImpl(config, auth, mode);\n    c.onAudioEvent = function(event, arg1, arg2) {\n        if (event === 'format') {\n            c._onAudioFormat(arg1);\n        } else if (event === 'frame') {\n            c._onMicFrame(arg1, arg2);\n        } else if (event === 'micStop' || event === 'playStart') {\n            c._stopListen();\n        } else {\n            console.error('unknown audio event: ' + event, arg1, arg2);\n        }\n    };\n    return c;\n}\n\nvar factories = {\n    connectProject: connectProject,\n};\n\nvar currentConnect = null;\n\nonmessage = function(e) {\n    var name = e.data[0];\n    try {\n        if (!currentConnect) {\n            currentConnect = factories[name].apply(null, e.data.slice(1, e.data.length));\n        } else {\n            currentConnect[name].apply(currentConnect, e.data.slice(1, e.data.length));\n        }\n    } catch(e) {\n        console.error('error calling: ' + name, e);\n    }\n};\n"]),{type: 'text/javascript'}));
        this._worker.onmessage = function(e) {
            if (e.data[0] === 'fireEvent') {
                _this._fire(e.data[1], e.data[2]);
                return;
            }
            if (e.data[0] === 'alanAudio') {
                if (e.data[1] === 'playText') {
                    alanAudio.playText(e.data[2]);
                    return;
                }
                if (e.data[1] === 'playAudio' || e.data[1] === 'playFrame') {
                    alanAudio.playAudio(e.data[2]);
                    return;
                }
                if (e.data[1] === 'playEvent' || e.data[1] === 'playCommand') {
                    alanAudio.playEvent(e.data[2]);
                    return;
                }
                if (e.data[1] === 'showPopup') {
                    alanAudio.showPopup(e.data[2]);
                    return;
                }
                if (e.data[1] === 'stop') {
                    alanAudio.stop();
                    return;
                }
            }
            if (e.data[0] === "callback") {
                _this._callback[e.data[1]](e.data[2], e.data[3]);
                delete _this._callback[e.data[1]];
                return;
            }
            if (e.data[0] === "setDialogId") {
                _this._dialogId = e.data[1];
                return;
            }
            console.error("invalid event", e.data);
        };
        this._worker.onerror = function(e) {
            console.error("error in worker: " + e.filename + ":" + e.lineno + " - " +  e.message);
        };
        this._handlers = {};
        this._cleanups = [];
        this._callback = {};
        this._callIds  = 1;
        this._config   = {};
    }

    ConnectionWrapper.prototype.on = function(event, handler) {
        var h = this._handlers[event];
        if (!h) {
            h = [];
            this._handlers[event] = h;
        }
        h.push(handler);
    };

    ConnectionWrapper.prototype.off = function(event, handler) {
        var h = this._handlers[event];
        if (h) {
            var index = h.indexOf(handler);
            if (index >= 0) {
                h.splice(index, 1);
            }
        }
    };

    ConnectionWrapper.prototype.getSettings = function() {
        return {
            server: config.baseURL,
            projectId: this._config.projectId,
            dialogId: this._dialogId,
        };
    };

    ConnectionWrapper.prototype.setVisual = function(state) {
        this._worker.postMessage(['setVisual', state]);
    };

    ConnectionWrapper.prototype.call = function(method, param, callback) {
        var cid = null;
        if (callback) {
            cid = this._callIds++;
            this._callback[cid] = callback;
        }
        this._worker.postMessage(['call', cid, method, param]);
    };

    ConnectionWrapper.prototype.close = function() {
        console.log('closing connection to: ' + this._url);
        this._cleanups.forEach(function (h) { h();});
        this._worker.postMessage(['close']);
        this._worker.terminate();
    };

    ConnectionWrapper.prototype._fire = function(event, object) {
        var h = this._handlers[event];
        if (h) {
            for (var i = 0; i < h.length; i++ ) {
                h[i](object);
            }
        }
    };

    ConnectionWrapper.prototype._addCleanup = function(f) {
        this._cleanups.push(f);
    };

    function fillAuth(values, ext) {
        var auth = {};
        for (var k in ext) {
            auth[k] = ext[k];
        }
        for (var k in values) {
            auth[k] = values[k];
        }

        if (!ext || (ext && ext.platform == null)) {
            auth.platform = config.platform;
        } else {
            auth.platform = config.platform + ":" + ext.platform;
        }
        if (!ext || (ext && ext.platformVersion == null)) {
            auth.platformVersion = config.version;
        } else {
            auth.platformVersion = config.version + ":" + ext.platformVersion;
        }
        if (ext && ext.appName) {
            auth.appName = ext.appName;
        }
        return auth;
    }

    function isProjectIdValid(projectId) {
        return projectId.match(/^[A-Z0-9]{64}\/(prod|stage|testing)$/gi);
    }
                            
    function connectProject(projectId, auth,  host, mode, ext) {
        var connect = new ConnectionWrapper();
        if (host)  {
            config.baseURL = "wss://" + host;
        }
        connect._config.projectId = projectId;
        connect._config.codec     = config.codec;
        connect._config.version   = config.version;
        connect._config.url       = config.baseURL + "/ws_project/" + projectId;

        if (!isProjectIdValid(projectId)) {
            throw new Error("Wrong projectId was provided");
        }

        connect._worker.postMessage(["connectProject", connect._config, fillAuth(auth, ext), mode]);
        function signupEvent(name, handler) {
            alanAudio.on(name, handler);
            connect._addCleanup(function() {
                alanAudio.off(name,  handler);
            });
        }
        function passEventToWorker(name) {
            function handler(a1, a2) {
                if (name === 'frame' && alanAudio.isPlaying()) {
                    return;
                }
                connect._worker.postMessage(['onAudioEvent', name, a1, a2]);
            }
            signupEvent(name, handler);
        }
        function passEventToClient(name) {
            function handler(e1) {
                connect._fire(name, e1);
            }
            signupEvent(name, handler);
        }
        passEventToWorker('frame');
        passEventToWorker('micStop');
        passEventToWorker('playStart');
        passEventToClient('text');
        passEventToClient('command');
        connect._worker.postMessage(['onAudioEvent', 'format', alanAudio.getFormat()]);
        return connect;
    }

    function connectProjectTest(projectId, auth,  host, mode, ext) {
        var connect = new ConnectionWrapper();
        if (host)  {
            config.baseURL = "wss://" + host;
        }
        connect._config.projectId = projectId;
        connect._config.codec     = config.codec;
        connect._config.version   = config.version;
        connect._config.url       = config.baseURL + "/ws_project/" + projectId;

        if (!isProjectIdValid(projectId)) {
            throw new Error("Wrong projectId was provided");
        }

        connect._worker.postMessage(["connectProject", connect._config, fillAuth(auth, ext), mode]);
        function signupEvent(name, handler) {
            alanAudio.on(name, handler);
            connect._addCleanup(function() {
                alanAudio.off(name,  handler);
            });
        }
        function passEventToWorker(name) {
            function handler(a1, a2) {
                if (name === 'frame' && alanAudio.isPlaying()) {
                    return;
                }
                connect._worker.postMessage(['onAudioEvent', name, a1, a2]);
            }
            signupEvent(name, handler);
        }
        function passEventToClient(name) {
            function handler(e1) {
                connect._fire(name, e1);
            }
            signupEvent(name, handler);
        }
        passEventToWorker('frame');
        passEventToWorker('micStop');
        passEventToWorker('playStart');
        passEventToClient('text');
        passEventToClient('command');
        return connect;
    }

    function connectTutor(auth, host) {
        var connect = new ConnectionWrapper();
        if (host)  {
            config.baseURL = "wss://" + host;
        }
        connect._config.version = config.version;
        connect._config.url = config.baseURL + "/ws_tutor";
        connect._worker.postMessage(["connectProject", connect._config, auth]);
        return connect;
    }

    ns.alanSDKVersion = config.version;

    ns.alan = {
        sdkVersion: config.version,
        diagnostic: ns.alanDiagnostic,
        projectTest: connectProjectTest,
        project: connectProject,
        tutor: connectTutor,
    };

})(window);

(function(ns) {
    "use strict";

    var PLAY_IDLE    = 'playIdle';
    var PLAY_ACTIVE  = 'playActive';
    var PLAY_STOPPED = 'playStopped';

    var MIC_IDLE     = 'micIdle';
    var MIC_ACTIVE   = 'micActive';
    var MIC_STOPPED  = 'micStopped';

    var AUDIO_RUNNING = 'audioRunning';

    var config = {
        bufferLength: 4096,
        sampleRate:   16000,
        encoderApplication: 2048,
        encodePCM:    false,
        micTimeout:   4000,
    };

    var handlers     = {};
    var micState     = MIC_STOPPED;
    var playState    = PLAY_STOPPED;
    var audioQueue   = [];
    var audioElement = null;
    var audioContext = null;
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var stopMicTimer = null;
    var skipFrame = false;

    var isIE         = false || !!document.documentMode;
    var isEdge       = !isIE && !!window.StyleMedia;
    var isChrome     = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (isEdge || isChrome) {
        audioContext = new AudioContext({sampleRate: config.sampleRate});
    } else {
        audioContext = new AudioContext();
    }
    console.log('audioContext.sampleRate = ', audioContext.sampleRate, 'state = ', audioContext.state);
    audioContext.resume().then(()=> fireEvent(AUDIO_RUNNING));

    var microphoneStream = null;
    var microphoneNode = null;
    var gainNode = audioContext.createGain();
    var encoderNode = audioContext.createScriptProcessor(config.bufferLength, 1, 1);
    encoderNode.onaudioprocess = ({inputBuffer}) => encodeBuffers(inputBuffer);
    encoderNode.connect(audioContext.destination);

    if (encoder.start) {
        encoder.start();
    }
    var encoderCallback = ({data}) => {
        switch (data['message']) {
            case 'ready':
                console.log('audio worker initialized');
                break;
            case 'page':
                fireEvent('frame', config.sampleRate, data['page']);
                break;
            case 'done':
                encoder.removeEventListener("message", encoderCallback);
                break;
            case 'print':
                console.log('AUDIO-WORKER', data.text);
                break;
        }
    };
    encoder.addEventListener('message', encoderCallback);
    encoder.postMessage({
        command: 'init',
        originalSampleRate: audioContext.sampleRate,
        encoderSampleRate: config.sampleRate,
        encoderApplication: config.encoderApplication,
        encodePCM: config.encodePCM,
    });

    function openMicrophone() {
        if (microphoneNode) {
            return Promise.resolve(microphoneNode);
        }
        return navigator.mediaDevices.getUserMedia({audio : true}).then(stream => {
            fireEvent('micAllowed');
            microphoneStream = stream;
            microphoneNode = audioContext.createMediaStreamSource(stream);
            microphoneNode.connect(gainNode);
            gainNode.connect(encoderNode);
        });
    }

    function encodeBuffers(inputBuffer) {
        if (micState !== MIC_ACTIVE || playState === PLAY_ACTIVE || skipFrame) {
            return;
        }
        var buffers = [inputBuffer.getChannelData(0)];
        encoder.postMessage({
            command: "encode",
            buffers: buffers
        });
    }

    function getAudioElement() {
        if (audioElement) {
            return audioElement;
        }
        audioElement = document.createElement("audio");
        audioElement.addEventListener("ended", function() {
            playState = PLAY_IDLE;
            _handleQueue(true);
        });
        document.body.appendChild(audioElement);
        audioElement.setAttribute("autoplay", "true");
        return audioElement;
    }

    function _handleQueue(nowPlaying) {
        if (audioContext.state === 'suspended') {
            return;
        }
        if (nowPlaying && !audioQueue.length) {
            onPlayStop();
        }
        if (!audioQueue.length || playState === PLAY_ACTIVE) {
            return;
        }
        while (audioQueue.length && playState !== PLAY_ACTIVE) {
            var o = audioQueue.shift();
            if (o.event) {
                fireEvent('command', o.event);
            } else if (o.text) {
                fireEvent('text', o.text);
            } else if (o.popup) {
                fireEvent('popup', o.popup);
            } else if (o.audio) {
                if (playState === PLAY_IDLE) {
                    playState = PLAY_ACTIVE;
                    fireEvent('playStart');
                    getAudioElement().setAttribute("src", o.audio);
                }
            } else {
                console.error('invalid queue item');
            }
        }
        if (nowPlaying && playState !== PLAY_ACTIVE) {
            onPlayStop();
        }
    }

    function onPlayStop() {
        fireEvent('playStop');
    }

    function fireEvent(event, o1, o2) {
        var h = handlers[event];
        if (h) {
            for (var i = 0; i < h.length; i++ ) {
                h[i](o1, o2);
            }
        }
    }

    ns.getFormat = function() {
        if (config.encodePCM) {
            return {
                send: {codec: 'pcm_f32le',  sampleRate: 16000},
                recv: {codec: 'mp3;base64', sampleRate: 16000},
            };
        } else {
            return {
                send: {codec: 'opus',       sampleRate: 16000},
                recv: {codec: 'mp3;base64', sampleRate: 16000},
            };
        }
    };

    ns.isAudioRunning = function() {
        return audioContext && audioContext.state === 'running';
    };

    ns.isPlaying = function() {
        return playState === PLAY_ACTIVE;
    };

    ns.playText = function(text) {
        audioContext.resume().then(()=> {
            audioQueue.push({text: text});
            _handleQueue();
        });
    };

    ns.playCommand = function(command) {
        audioContext.resume().then(()=> {
            audioQueue.push({event: command});
            _handleQueue();
        });
    };

    ns.showPopup = function(popup) {
        if (popup.popup.force) {
            fireEvent("popup", popup);
        } else {
            audioContext.resume().then(()=> {
                audioQueue.push({popup: popup});
                _handleQueue();
            });
        }
    };

    ns.playEvent = function(event) {
        ns.playCommand(event);
    };

    ns.playAudio = function(audio) {
        audioContext.resume().then(()=> {
            audioQueue.push({audio: audio});
            _handleQueue();
        });
    };

    ns.on = function(event, handler) {
        var h = handlers[event];
        if (h == null) {
            handlers[event] = [handler];
        } else {
            h.push(handler);
        }
    };

    ns.off = function(event, handler) {
        var h = handlers[event];
        if (h) {
            var index = h.indexOf(handler);
            if (index >= 0) {
                h.splice(index, 1);
            }
        }
    };

    ns.resumeAudioCtx = function() {
        audioContext.resume();
    };

    var micAllowed = false;

    function setMicAllowed(value) {
        micAllowed = value;
    }

    ns.isMicAllowed = function() {
        return micAllowed;
    }

    ns.start = function(onStarted) {
        if (stopMicTimer) {
            clearTimeout(stopMicTimer);
            stopMicTimer = null;
        }
        // if (micState === MIC_ACTIVE) {
        //     return;
        // }
        getAudioElement().setAttribute("src", "");
        playState = PLAY_IDLE;
        openMicrophone()
            .then(()=> { 
                micState = MIC_ACTIVE;
                fireEvent('micStart');
            })
            .then(()=> { setMicAllowed(true); audioContext.resume();})
            .catch(err => { fireEvent('micFail', err); });
        if (onStarted) {
            onStarted();
            onStarted = null;
        }
    };

    ns.stop = function() {
        if (microphoneNode) {
            micState = MIC_IDLE;
        }
        if (stopMicTimer) {
            clearTimeout(stopMicTimer);
            stopMicTimer = null;
        }
        stopMicTimer = setTimeout(stopMicrophone, config.micTimeout);
        fireEvent('micStop');
        playState = PLAY_STOPPED;
        audioQueue = [];
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
            audioElement.src = "";
        }
    };

    ns.skipExternalSounds = function(skip) {
        skipFrame = skip;
    };

    function stopMicrophone() {
        console.log('stopping the mic.');
        micState = MIC_STOPPED;
        if (microphoneNode) {
            microphoneNode.disconnect();
            microphoneNode = null;
        }
        gainNode.disconnect();
        if (microphoneStream) {
            if (microphoneStream.getTracks) {
                microphoneStream.getTracks().forEach(track => track.stop());
            } else {
                microphoneStream.stop();
            }
            microphoneStream = null;
        }
    }

})(typeof(window) !== 'undefined' ? (function() {window.alanAudio = {}; return window.alanAudio})() : exports);

(function(ns) {
    "use strict";

    var alanButtonVersion = '1.8.28';

    if (window.alanBtn) {
        console.warn('Alan: the Alan Button source code has already added (v.' + alanButtonVersion + ')');
    }

    var alanAltText = 'Alan voice assistant';
    var currentProjectId = null;
    var deviceId;
    var firstClick = null;

    // Define base properties for disable/enable button functionality
    var isLocalStorageAvailable = false;

    try {
        localStorage.getItem('test');
        isLocalStorageAvailable = true;
    } catch (e) {
        isLocalStorageAvailable = false;
    }

    var isSessionStorageAvailable = false;

    try {
        sessionStorage.getItem('test');
        isSessionStorageAvailable = true;
    } catch (e) {
        isSessionStorageAvailable = false;
    }

    function getDebugInfo() {
        var info = '\nDebug Info:\n';

        info += 'alanBtn: v.' + alanButtonVersion + '\n';
        info += 'alanSDK: v.' + window.alanSDKVersion + '\n';
        info += 'projectId: ' + (currentProjectId || 'unknown')  + '\n';
        info += 'deviceId: ' + getDeviceId()  + '\n';

        info += 'navigator: \n';

        info += 'getUserMedia: ';
        info += navigator.getUserMedia ? '1' : '0';
        info += ', ';

        info += 'mediaDevices: ';
        info += (navigator.mediaDevices) ? '1' : '0';
        info += ', ';

        info += 'mediaDevices.getUserMedia: ';
        info += (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) ? '1' : '0';
        info += ', ';

        info += 'webkitGUM: ';
        info += navigator.webkitGetUserMedia ? '1' : '0';
        info += ', ';

        info += 'mozGUM: ';
        info += navigator.mozGetUserMedia ? '1' : '0';
        info += ', ';

        info += 'msGUM: ';
        info += navigator.msGetUserMedia ? '1' : '0';
        info += '\n';

        info += 'window: \n';

        info += 'AudioContext: ';
        info += window.AudioContext ? '1' : '0';
        info += ', ';

        info += 'webkitAC: ';
        info += window.webkitAudioContext ? '1' : '0';
        info += ', ';

        info += 'mozAC: ';
        info += window.mozAudioContext ? '1' : '0';
        info += '\n';

        info += 'userAgent: ';
        info += navigator.userAgent;

        return info;
    }

    function getDeviceId() {
        var deviceIdKey = 'alan-btn-uuid-' + currentProjectId;

        if (isLocalStorageAvailable) {
            deviceId = localStorage.getItem(deviceIdKey);
        }

        if (!deviceId) {
            deviceId = guid();
            if (isLocalStorageAvailable) {
                localStorage.setItem(deviceIdKey, deviceId);
            }
        }
        return deviceId;
    }

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                       .toString(16)
                       .substring(1);
        }
    
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }


function alanBtn(options) {

    options = options || {};

    var btnDisabled = false;
    var hideS2TPanel = false;
    var pinned = false;
    var absolutePosition = false;
    var micWasStoppedByTimeout = false;
    var keepButtonPositionAfterDnD = false;
    
    console.log('Alan: v.' + alanButtonVersion);

    var btnInstance = {
        // Common public API
        version: alanButtonVersion,
        setVisualState: function (visualState) {
            if (btnDisabled) {
                return;
            }

            if (window.tutorProject) {
                window.tutorProject.setVisual(visualState);
            }
        },
        callProjectApi: function (funcName, data, callback) {
            var funcNamePrefix = 'script::';
            if (btnDisabled) {
                return;
            }
            if (!funcName) {
                throw new Error('Function name for callProjectApi must be provided');
            }

            if (window.tutorProject) {
                if (funcName.indexOf(funcNamePrefix) === 0) {
                    window.tutorProject.call(funcName, data, callback);
                } else {
                    window.tutorProject.call(funcNamePrefix + funcName, data, callback);
                }
            }
        },
        playText: function (text) {
            if (btnDisabled) {
                return;
            }

            if (window.tutorProject) {
                window.tutorProject.call('play', {
                    text: text
                });
            }
        },
        playCommand: function (command) {
            if (btnDisabled) {
                return;
            }

            alanAudio.playCommand({
                data: command
            });
        },
        activate: function () {
            return activateAlanButton();
        },
        deactivate: function () {
            if (btnDisabled) {
                return;
            }

            alanAudio.stop();
        },
        isActive: function () {
            return isAlanActive;
        },
        //deprecated
        callClientApi: function (method, data, callback) {
            if (btnDisabled) {
                return;
            }

            if (window.tutorProject) {
                window.tutorProject.call(method, data, callback);
            }
        },
        // deprecated
        setAuthData: function (data) {
            if (btnDisabled) {
                return;
            }

            if (window.tutorProject) {
                window.tutorProject.close();
                window.tutorProject = alan.project(options.key, getAuthData(data), options.host);
                window.tutorProject.on('connectStatus', onConnectStatusChange);
                window.tutorProject.on('options', onOptionsReceived);
            }
        },
        // Other methods
        setOptions: function (options) {
            onOptionsReceived(options);
        },
        setPreviewState: function (state) {
            switchState(state);
        },
        remove: function () {
            alanAudio.stop();
            window.tutorProject.close();
            rootEl.remove();
        },
        stop: function () {
            alanAudio.stop();
        },
        updateButtonState: function (state) {
            onConnectStatusChange(state);
        },
        sendEvent: sendUserEvent
    };

    document.addEventListener('click', resumeAudioCtx);

    function resumeAudioCtx() {
        alanAudio.resumeAudioCtx();
        document.removeEventListener('click', resumeAudioCtx);
    }

    function sendUserEvent(eventName, eventValue) {
        var obj = eventValue ? {name: eventName, value: eventValue} : {name: eventName};
        // var obj = {};
        // obj[eventName] = eventValue ? eventValue : true;
        sendClientEvent(obj);
    }

    function sendClientEvent(param) {
        if (window.tutorProject) {
            window.tutorProject.call('clientEvent', param);
        } else {
            setTimeout(() => sendClientEvent(param), 3000);
        }
    }


    //Host
    var host = 'studio.alan.app';
    var baseUrl = 'https://' + ((host.indexOf('$') === 0 || host === '') ? window.location.host : host);

    if (options.host) {
        baseUrl = 'https://' + options.host;
    }

    // Btn modes
    var mode;

    if (options.mode === 'tutor') {
        mode = 'tutor';
        pinned = true;
    } else if (options.mode === 'demo') {
        mode = 'demo';
    } else {
        mode = 'component';
    }

    if (options.position === 'absolute' || options.pinned) {
        pinned = true;
    }

    if (options.position === 'absolute') {
        absolutePosition = true;
    }

    var btnStateMapping = {
        'default': 'ONLINE',
        'offline': 'OFFLINE',
        'disconnected': 'CONNECTING',
        'listening': 'LISTEN',
        'understood': 'PROCESS',
        'intermediate': 'PROCESS',
        'speaking': 'REPLY',
    };

    // Btn states
    var DEFAULT = 'default';
    var LISTENING = 'listening';
    var SPEAKING = 'speaking';
    var INTERMEDIATE = 'intermediate';
    var UNDERSTOOD = 'understood';
    var DISCONNECTED = 'disconnected';
    var OFFLINE = 'offline';
    var LOW_VOLUME = 'lowVolume';
    var PERMISSION_DENIED = 'permissionDenied';
    var NO_VOICE_SUPPORT = 'noVoiceSupport';
    var NOT_SECURE_ORIGIN = 'notSecureOrigin';

    // Error messages
    var MIC_BLOCKED_MSG = 'Microphone access is blocked in your browser settings. Enable it to allow the voice assistant using your microphone';
    var NO_VOICE_SUPPORT_IN_BROWSER_MSG = 'Your browser doesn’t support voice input. If you think your browser supports voice input, please send the Debug info below to support@alan.app. ' + getDebugInfo();
    var NOT_SECURE_ORIGIN_MSG = 'Audio is allowed only on a secure connection: make sure your connection protocol is under HTTPS, HTTP on localhost or file. A connection over the file protocol may not work in some browsers, e.g., in Safari. Now you are running with "' + window.location.protocol + '" protocol and "' + window.location.hostname + '" hostname';
    var LOW_VOLUME_MSG = 'Low volume level';
    var OFFLINE_MSG = 'You\'re offline';
    var currentErrMsg = null;


    var NO_VOICE_SUPPORT_IN_BROWSER_CODE = 'browser-does-not-support-voice-input';
    var MIC_BLOCKED_CODE = 'microphone-access-blocked';
    var PREVIEW_MODE_CODE = 'preview-mode';
    var BTN_IS_DISABLED_CODE = 'btn-is-disabled';
    var NO_ALAN_AUDIO_INSANCE_WAS_PROVIDED_CODE = 'no-alan-audio-instance-was-provided';

    // Set default state for btn
    var state = DISCONNECTED;
    var previousState = null;
    var isAlanSpeaking = false;
    var isAlanActive = false;

    // Set btn position flags
    var isLeftAligned = false;
    var isRightAligned = true;
    var isTopAligned = false;
    var isBottomAligned = false;

    var recognisedTextVisible = false;
    var playReadyToListenSound = true;

    var turnOffTimeout = 30000;
    var turnOffVoiceFn;

    // Dnd variables
    var dndInitMousePos = [0, 0];
    var dndIsDown = false;
    var btnWasMoved = false;
    var afterMouseMove = false;
    var dndFinalHorPos = null;
    var dndBtnLeftPos = 0;
    var dndBtnTopPos;
    var dndAnimDelay = 300;
    var tempDeltaX = 0, tempDeltaY = 0;
    var dndAnimTransition = dndAnimDelay + 'ms';
    var dndBackAnimFinished = true;

    function setTurnOffVoiceTimeout() {
        turnOffVoiceFn = debounce(function () {
            if (isAlanSpeaking) {
                // console.info('BTN: CONTINUE alanAudio', new Date());
                turnOffVoiceFn();
            } else {
                // console.info('BTN: STOP alanAudio', new Date());
                alanAudio.stop();
                micWasStoppedByTimeout = true;
            }
        }, turnOffTimeout);
    }

    setTurnOffVoiceTimeout();

    var switchToLowVolumeStateTimer = null;

    // Css animations
    var pulsatingAnimation = '';
    var pulsatingMicAnimation = '';
    var pulsatingTriangleMicAnimation = '';
    if (!isPreviewMode()) {
        pulsatingAnimation = 'alan-pulsating 2s ease-in-out infinite';
        pulsatingMicAnimation = 'alan-mic-pulsating 1.4s ease-in-out infinite';
        pulsatingTriangleMicAnimation = 'alan-triangle-mic-pulsating 1.2s ease-in-out infinite';
    }

    var gradientAnimation = 'alan-gradient 3s ease-in-out infinite';
    var disconnectedLoaderAnimation = 'disconnected-loader-animation 2s linear infinite';

    // Set alanAudio
    var alanAudio = window.alanAudio;

    // Define base blocks and layers
    var rootEl = options.rootEl || document.createElement('div');
    var body = document.getElementsByTagName('body')[0];
    var btn = document.createElement('div');

    var micIconSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH9SURBVHgB7dvvUcIwGMfxByfADdjAEdQN3EA2YATcAJ2AEXADdALcgG4AGzwm13DQkNKWQBvK93OXF4W0Z36mf5IUEQAAAAAAAAAAgPOo6ocpS91bmfIuOM2ENHJhlVnbOoIwF1CVleCYCWas9U0kEQ+SjibXuDdJxEASYbtVg+rbwWDwKAm41QDFBJjE357SKXyTCDASAUYiwEgEGIkAIxFgJAKMRICRWgvQTRZs3IzLxef2rn38zmlxqmoT+L6Rpse/ltbGk36j/bFsKJRTqvZva6zc2TXQtHfofbSV+rYVx2pNmwFm3vbI2/6R+r4rjvUnLWkzQL9Rz972l9T3WXGsTPrGTsN794FloM5Uq00D+/kLUb28Cw8DYbwE6k1LgrOPKJNA/dBaykj6SItrvdZaAzcAzZc3bTBzVyYl9YZ6vJK3kL6yPS7QW+ZyJhvW3fS+HdPAWaDRiyYNdz1vecl/xs0oOe12p3Plxd+d2mX7t/482MnKlutt9i48CnydSf5M+Cv7xxFb78mUsSnDkn1ezeAjk3uh+Y0i1JOaWuu9vi/jTueZns/u29kwLhma98Z5g+CWpjwLirT4/Oezn01S63HJvNrhs4kdbqfyKoePKf1IBBiJACMRYCQCjESAkVIO8HDhKBM0o/tZFzsTzY9sAAAAAAAAAABAjH+9EqX09fBHaQAAAABJRU5ErkJggg==';
    var roundedTriangleSecondLayerSrc = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjMuNzQ5Mzk5NDZlLTMxJSIgeDI9IjIuODYwODIwMDklIiB5Mj0iOTcuMTM5MTc5OSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjEyIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wNCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBbGFuLUJ1dHRvbi0vLUFuaW1hdGlvbi0vLWJ1dHRvbi1pbm5lci1zaGFwZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTQwLjEwMDU0MjIsOSBMNDAuMTAwNTQyMiw5IEM1MC4wNzA0NzUxLDkgNTkuMTUxNjIzNSwxNC43MzM3OTM4IDYzLjQzODA5OCwyMy43MzUyMjE0IEw3MC40MjIwMjY3LDM4LjQwMTE5NyBDNzUuMTcxMDE0NSw0OC4zNzM4ODQ0IDcwLjkzNjM2OTMsNjAuMzA4MTYwMSA2MC45NjM2ODE5LDY1LjA1NzE0NzggQzU4LjI3NzU5NDksNjYuMzM2MjYwOCA1NS4zMzk5NzQ0LDY3IDUyLjM2NDg3ODksNjcgTDI3LjgzNjIwNTQsNjcgQzE2Ljc5MDUxMDQsNjcgNy44MzYyMDU0Myw1OC4wNDU2OTUgNy44MzYyMDU0Myw0NyBDNy44MzYyMDU0Myw0NC4wMjQ5MDQ1IDguNDk5OTQ0NTksNDEuMDg3Mjg0IDkuNzc5MDU3NiwzOC40MDExOTcgTDE2Ljc2Mjk4NjQsMjMuNzM1MjIxNCBDMjEuMDQ5NDYwOCwxNC43MzM3OTM4IDMwLjEzMDYwOTIsOSA0MC4xMDA1NDIyLDkgWiIgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==\n';
    var circleSecondLayerSrc = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZS1zcGVha2luZyBiYWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMy43NDkzOTk0NmUtMzElIiB4Mj0iMi44NjA4MjAwOSUiIHkyPSI5Ny4xMzkxNzk5JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMTIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjA0IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWlubmVyLXNoYXBlLXNwZWFraW5nLWJhY2siIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBjeD0iNDAiIGN5PSI0MCIgcj0iMzIiPjwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4=\n';
    
    var micIconDiv = document.createElement('div');

    var defaultStateBtnIconImg = document.createElement('img');
    var listenStateBtnIconImg = document.createElement('img');
    var processStateBtnIconImg = document.createElement('img');
    var replyStateBtnIconImg = document.createElement('img');

    var logoState1 = document.createElement('img');
    var logoState2 = document.createElement('img');
    var logoState3 = document.createElement('img');
    var logoState4 = document.createElement('img');
    var logoState5 = document.createElement('img');
    var logoState6 = document.createElement('img');
    var logoState7 = document.createElement('img');
    var logoState8 = document.createElement('img');
    var logoState9 = document.createElement('img');
    var logoState10 = document.createElement('img');
    
    var roundedTriangleIconDiv = document.createElement('div');
    var circleIconDiv = document.createElement('div');

    var disconnectedMicLoaderIconImg = document.createElement('img');
    var lowVolumeMicIconImg = document.createElement('img');
    var noVoiceSupportMicIconImg = document.createElement('img');
    var offlineIconImg = document.createElement('img');

    var recognisedTextHolder = document.createElement('div');
    var recognisedTextContent = document.createElement('div');
    var soundOnAudioDoesNotExist = false;
    var soundOffAudioDoesNotExist = false;
    var soundNextAudioDoesNotExist = false;
    var soundNextColdPlay = true;
    var soundOnAudio = new Audio('data:audio/mp4;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAA2+bWRhdNwATGF2YzUyLjEwOC4wAEI4qTpRvIg0Vzm9dWB5qtSee+dV99Zx+l/Fq3cRzpUzwAczEW3K/QeibL/z/o61lFt2+2XCTlsCfHhPJn0NNjJXaYSmaGfiEpxAmgMa8Y2Ku6tMaY2KEd0fh2Lq+1V9QG2AG2X9fz/aRthoUg25mjNoUzfH76Zho4Cf+NoHx+YADSANIAuZgCoAAAAFwAgra8wAABKSk/AIUHOc8dID2qtSdc86r763r7a82c3db4VK9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOIRxP//9ff9l+StBOFQEEIMADrU1esviVP0+/58+1VXjrYUTqI8wqniRIBSUmZdymtUaj50znKCY0MEME2aHNzNhuEHb0MhRkTocVXOwAwa/MACXcksMsAAAAwgASEoo7GegIIQYAHWpqdU8sv9Pv+nt7UrxxgAAAAAAAAAjyswppc3gAAAABVlwgAAAAADghHEnxPFkQQMIcx2IUooUhB58D/n/j8QiSXYbrMqqoH6UR9o49FoWGURDSXZCbt224HuTzw83B/8ZqeLzP6MKrV7m60F8kasq3hbtLnW80RAWCQAEAAAARIRR2I2McUBFxyP9v7/SIkl2ZbndVVUH1QAAAOepYKxFCsoZScK3ra6yEismpEDlxJtTPBoJABMMQDmcMRhnn/aTL8p8ROYkXzoqpkwAABM4hHErTQEDgAAIEnskThJqTnqEIklwG8yqqgYTV/DSPoRrAZ1CAXtWTyKqALkJAayvmk+spUNhRZFUNV6Mzyg7YGJlokaGF4WnZ5fU/X9unfpWvu7NFAFQAAAs/mkkMchiMJrkzUIRJLAzMqqEQ3oUygkpG7mgf/K/FYBrCTnTXKAMTEZ1sIqaGkgm6sO2+pzYVqJBdTmL8SnzOcGRfmYMl7VVKgXTXACdjgCEcSQCpBsACQfyixkGKAe1JEIiJIBWZVUpQMAsYkHDKBsfXlsW4/hCc7iSUneiLJQhIaUWHTYMiWuAmJBDZMMcmAol2GUV+ZwF671Aw+ybevC/QwC4CEKzx1KURCQSARALv4wYqEEgUXJEIRJLAzMqhEHAnTe768EYWipFDgDkYvDk42wsIsUwccDIsoNtD/7Nm6YLEhRZCy6h2XOha33MO8CgBwCEsTZ3wFUAAAgBeixSDmriEIiSwMyqqqooRAp1GNLBSNp5RcTS8l2g7/b+u6q8tBwW57VbLU2oBv+n09/9wj1waNQOE1QpKmzRCrQjaqEd8eIFnXTh3zFhdMAAqqACIfxeixIE1yRCESSwMzKqgqMoTESt4QjZgsGFUtaJEMp8LJAXooj3+3WcyqEp36CI7ACG22YVqKB4zOCkKBSdBARCIcCFOx0wH4bgWEpJh1GyhLkH9z2/xl1V//tz918e3n15zeb/tX3v2r67cWBgyQYDgU9joaw0P20rqBOd9DKSUM10E8XGk+/7tPGGmkCekRgEINDc0Pt9XF3sCYOlyyiAcY9CgAC11Lu50cQwALAUAoMhAAAAIJAAEyH4XCws5EOo2UJcg/unn/G9VP/pz9L4+OvXmuW/759+Onx3OAKuJ0NdeIDTb8D870iFiAfFpRPfgvSHxpAVEcwiiQ3ND7YBSQDA+WQYAxgAAACXUrADAAAFAKAAADAAAAABwIXxP/////33+SIlmJoqCDF4A1rUlytaFjvqoMnx8JFSsLtjG2dw/3SLWQaHJm/f394Rk+Mw9/f3LJ8Nh33ID4zD3hlGT4zB/DzAyLmKeRaDF2YZZYCYDzAADL6AAJNz2MbhBS9gONakuVrSrDegAAAAAAAAAAAAAAAAAAAAAAAHAIRxO/3QLrv96FE9jMzHQQnCLqSPyF+fMkvQVzmVVKEYDOZb+JDkWMmagDNGlV8YVyOcEQtEXaobWdUJHI7bEoppIp7Uiik9SubFIkua4AoohJUmmqAgiFwAAAAQonshmY4oCLqSPsP+v/HnzJL03rJzmVVUAAAAAADw4AIJSKRsBMl0g80mlwVypim1qJmkOEmbnQVaKCG5kQiMbcOV5xOQkmAO8EQAAADghHE5+iwX80gYR0khjmgIupIn2PwiSXYPDKqqCQAF7vZ+YzDhw2cgmc3uruZIFhtd4crrbzCODPCTJKnFQvqS6iHAbu46CoqUyL0pKjZpeMQOaoAgAAAAEE7EOxTUD3EkT7H4RJLjLN5lVVFAEgAEgD2FY0ntXGAt0SRICwvTrCJv1UODqZlaT6AOegWBIromeSWSoxlO9egbXN0dp28QAAAAAAAAEhyEcTQw1ACQAAgFWiGMJQmu4jvOOiRNAbyqqh2ACC3f/t2jRTyWL5jszVMifzz2rQdYnkhuwttkp5U21jyAhGa4DBAgogkJK+R3TBrSs5iKAYKv1VngTyw/WHItS4I6hUIFZsYUBBqSJ3z10iSXAbzKqqAAJFhJME0pWpkXar2uMoazjdI2uIq7baa8ZyK25EYK4dkuGiibKae+FcpExR6WRZAAIT+9rZ7IpCs5VkWACoAAADiEsTF8QQaQAAfzYjBIFUuIQiJNAbyqESYfGhCtCrwVPBz816cYA0ZADmNLmkNEN0LjyfLRa87M4vMq81Q21YWHw45SqEAA/m9FCgILkiEIklgZmVVUAABFuelUuPVDQ+rz7vT3HFwwUJ0TnTk4KS1Z4tD+aa8S/y5azYVNW3N5twoAEkAAAAAAcIU6bOYfi2TDm0zJBxZolA5/1tl67HWTk1eh1h0n0FoxKZVPOCQZxDTU+0CW3yHTpHJ6Oz40a+kOuj1D8cs5yO9xQg4qAEcnmCAoAAHBiU/Q6JunJ8aS9dNc/y+nNrh52cyIcPxODm0xQsSQcWZIwOWqy+vQ85OzWtA+/fthc2xqKAAAAAOwHWAAAAAPK4AAAAAIAAAAAw23cSfXeM9zAwHurwCF8T///+3p7/kkJZieJgkACa1qtW4qXIFUCgUFQsMY4j8DKUDAid5YtPTqWk2ZPv7wj4+Gwn39x8fDY9/eE/x8Nu++gD4yGCd0IZ8VBONyn/I3vBdONoMFdQwWsxR4AASTlsUjGgTABNa1WrrUnGay6qgAAAAAAAAAAAD+N44PeAAmIVAAHIRxO/oBQPAOeDEtkE7IEoUakfl/5P/H8okl6ePKucyqEYG9C2bdNxT4AosQ4eHIWhD1zGBNoApQpOuMLroxwolNBCLnWWitpjOFotNq1trCaHnkiMp+PdKWittvQdEJSgCtRBOaxkhkCYJNSPl/y/4/WIku2WzMxigAAAAMCMGjOADF7n7S7MQJqpGpU4fGyKZQRGVARnsF20GKIIDMs51uwUFLEBfDABMXs8CuSzdut04VXpdnUFwAAcCEcTzynZ7iAUg5QKWOZwk4knp/n+30iJLtUbrMYoSAXWl/XeS5cNcA7J6r0w/vB3NZc1pQkBIC0bEUh7JjUUKJ5neIMryQmZRnrqMaecRXAXFARAAAgpSSGOKQg4kn2H6oiS4DeZVUoAIkAKEhTE7zBC5IoMSJYWGN0QacZ4uxvRwAxAWRCDsISUUhaGFRDu1F+V7Y4WovctM1RBPziIAAAARBwIRxMN4Oh4AACBV7KE4Rakj15tESS4VG8yqqg7AAx3yAVHLSKXAYSNCQjalJOuKhREZzVWg7ErQLGxYsHZxJwlc7CeYwtSEQaWNEpGILROvXhIALIAAAARAgTYqkGKAg1cT39rQkTQG8qqqqAIBIizGVKZ3EwRe47owRjUUzmoVa977M/BuJxuHc27b0VZpAG7O6IFJPWK2myi1ly4AAAAAAucCEsTQXTNIAAAfzgiBKFF3EQiJJAK3VUAR8rsmtxc0W7XRaxLVlVVpHBpuTfSgnlsimhYX0FUV02T/opLsyJPCyuSuDrAZAhaQg/m9EiUKLkiEIklgZmVQA8qAwkTdVrwVZWr0cpr4MY/GhqLEJYZtRWCpsjTZRL7MEMKbfTwi8oBQOAIU43PYfiqPTG0xKBiNpCTDj9vE6J1P7H8/x7enm7l/bb6k6DuWY3f9G2fZaLnSgrpIAASiB/lsAVlx0w3no8ifVk8qMVZlSc20aBnXlroKFsywA2AG0gAcyAb+wLRxjn5CNQ4T3KQ/jbGB82UHBACcQgB8D8TD7Y2mJUKRtISYcfp4nROp/Y/n+Pb083cuvnb6k6AAAAAAAA2AAAAA8iAAAAAABOoBgAFgAAAAAAAAAAAAAADHOAAHKQ7uBgAAAAAADgIXxP///8/du+LRljGgOHXx+ia+05A/ddee/IAoNCjp3vRoKaiFBR235qwu2Mc+3SGxAbOpp1JjwyQP4v4fwzP4/aLzeJTH5IpQMOE826HHFGOP6Qph+0+OECaVgGRQoAElAAAARhskNhUI0Bw8/X8VfH5YB+rWeeeNAooAAAAAAAAAAAAfw8WLtyn4ZSh/HsAAAAAAABEABwIRxP6/6FdxOOCVtjETHE4RakiET9n/L/jr97MZmVVKEFQLYCLrsA1UD3NgiA2cS0qYxzHjwDqRAtJ0rhetKCh7Jr2ekSGS2mclwhLyGZa5KQMKicWOhwdJueC/tgEZR2MTkAABUBK4gjYobGImMaQg1chCPy/2f34/Ww3uqqqUALsgAAAAccUQDRRwJKLzuQQ4wznklMiqdhAleJuNU9xzZVPCSINtHQ1c958XBKcSSc4ztdMAAABQABwAAAAyxtb292AAAAbG12aGQAAAAAfCWwgHwlsIAAAAPoAAABwAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACWHRyYWsAAABcdGtoZAAAAA98JbCAfCWwgAAAAAEAAAAAAAABwAAAAAAAAAAAAAAAAAEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAfRtZGlhAAAAIG1kaGQAAAAAfCWwgHwlsIAAALuAAABUAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAGfbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAFjc3RibAAAAFtzdHNkAAAAAAAAAAEAAABLbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAALuAAAAAAAAnZXNkcwAAAAADGQABAAQRQBUAAAAAAPoAAAAAAAUCEZAGAQIAAAAYc3R0cwAAAAAAAAABAAAAFQAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAaHN0c3oAAAAAAAAAAAAAABUAAADgAAAAjwAAAKgAAACqAAAApQAAAKIAAADaAAAAgQAAAKoAAACnAAAAtAAAAIkAAACjAAAAhgAAALsAAACkAAAAowAAAIMAAADDAAAAmQAAALsAAABkc3RjbwAAAAAAAAAVAAAAKAAAAQgAAAGXAAACPwAAAukAAAOOAAAEMAAABQoAAAWLAAAGNQAABtwAAAeQAAAIGQAACLwAAAlCAAAJ/QAACqEAAAtEAAALxwAADIoAAA0jAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi45My4w');
    soundOnAudio.onerror = function() {
        soundOnAudioDoesNotExist = true;
    };
    var soundOffAudio = new Audio('data:audio/mp4;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAWbbWRhdNwATGF2YzUyLjEwOC4wAEI4liJvGTaBRNWgpCwBiMCjrsceWmt/FX4+tazOAVVgZQfdya5JhBsOJ3/kOLuaScl8ydUMZk+oCXDAQR4AwMDdP/MDUUJNh9sfnQJI67rzSfO+O/wSYeAkr2hw/AiHzSA2iwAABVoAAATSEQAWBwACwAJq0j8oENVh51BL41uvM13rzrd1VazVblJSlB968g89yG7I+jnst9OXR9sLNIq6QTNdwTAiACMbS6bNcogBd6uHq2bP2+9v8W4RgZ9J87InCwEgAAAWoAVCYE0wABICYCwSCJYARiABQOAhHEhXf73AAAJuzqc3hQAPh5nPtWt3xrF1EDTThAsCZ35emIYzsHbWvviUi8B6TR6I3FEXS27pXovDTi9vXdk9kY83K6Li6LESt19EOrWbdod7lUhQIAAJazuQ7g8AOHSuNY1XF5fHMiqBjnJiSEKXL9Gg066fyhzOdsPOiq4JVfeSAalwAACoAADP9I7P8VyuxAAKAFkyYAAAAKuAIRxPH/fokAACXs6kGYTABrzk6a56yvbx7b8gTbkJGTKRMwZs+oNhUlJEbiZbqKHWI/1XrNXxFH4+/4rXvevonT+RC8L+qkBfR39U5ApqpAenmrOx5wgTd6xnMwjglbQdwkAB5ydVrOKrzmmgDL02TydTcY7HxwkJFi4RS2Vwz8aYywsACoAADHC1AQXlwqZuxhilTKAF1V4JyJwsAOAhLE6t////CEJi0lIRhMAL1qTV1cvNVqRUG/e+CR0TMHKNkqjy3ad0D7sSMbq7CXo+u3OvRI5mjGY5lPPQ6kIynobbeJBzOu4xQhoBJZQcw54odEI3Bx8NLTQoAAExaDsEwAnGrai5eaSXAJaO9ay9zDzSeUvgfsrNuf2qrZiR60AAAAAAAAAAAADgIU7ZOQfgPxcRhxbikgn261Y/Z8XoA5N+b6U1DtrC2jv2QJmqLIZrCkNBopcnyH/JG3R7bW52taiziWookX3P9k3HUqdzD8B+KxINaqsigH7ceYU/ida6SpStjzj4PNrxhLba06ZYIKWPr84KCGKhkIkq1T3t6yquOKkcdlLKNjiWzUbtxKauaRHmVDPwVzP2c35acUOAIXxPIV/+8AACWtQ0CYAOOKV8ZVr6y99SgzBUQSAcP9VlkmanC8ykvqjcWDiztAmWZ1i6WlCdF0K052WpCj8LWvUxBc1t/PZvCN+/xVgFxmM5eoQAArKWg8hAAGlp5VdXL1VgBM/CAWXJzbtdgq4kNkqDm7hm+6Ij7YH0femapCwAAAAAAmXrSe4FAAAAAABC5yEcTy3X++ABAlLQgxqEQAXON+Ul5eq49fEFD1zBIxKViiEo2PTaYQMJMMHxUWUFZ2mUDgfxhAzn/iY8YUfqVj25fPC4xpq/CNv8VD4mmPzwyhvtSzGKDBvmtgpWNJiCICVggrUXBK2g7BMAGmnnJNZeq676uqDv3f078fLYKuyQ0z/Lr1Yx381ass4E+MCY54AAAAWlk4JAAAawAA4hHEo///93AgJi0k8UBEAHm61xS5remmhljsjmck4t2n53zihd/FMh54rUP4IigM9qSQXshl7ObbJMP7XpqWVWARSkTKnm/NZIO1GF/1iQVW68fvVzu63sz8JaJy2EUirqAAInYsmrQNgmADrUmkaVwurlhYH1LVzlzX4KLE+3OsxUdPRiWJAAAAAAAAAAE5EQABwhGogf/////x1JSIQABetS5L1xllD6Lkf3uE14UyZQQs1HttutUitG2UFsarRLNRUzQq1kKhZOw0Do2JrSsR0FFUzQpKaCkpIKG0Do2g0NsWad60dCTkDwAXrUku71WiqH5vx+zUYwk9rInJSyUnwmEAAAAAAAAAOAIRAEYIwcIRAEYIwcIRAEYIwcAAAC5G1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAEAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIQdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABrG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAAu4AAADAAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAVdtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAARtzdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAAu4AAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAAA+gAAAAAABQIRkAYBAgAAABhzdHRzAAAAAAAAAAEAAAAMAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAABEc3RzegAAAAAAAAAAAAAADAAAAOsAAACdAAAAngAAAIsAAACWAAAAkQAAAJ0AAACTAAAAeQAAAAYAAAAGAAAABgAAAEBzdGNvAAAAAAAAAAwAAAAoAAABEwAAAbAAAAJOAAAC2QAAA28AAAQAAAAEnQAABTAAAAWpAAAFrwAABbUAAABgdWR0YQAAAFhtZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAACtpbHN0AAAAI6l0b28AAAAbZGF0YQAAAAEAAAAATGF2ZjUyLjkzLjA=');
    soundOffAudio.onerror = function() {
        soundOffAudioDoesNotExist = true;
    };
    var soundNextAudio = new Audio('data:audio/mp4;base64,AAAAHGZ0eXBNNEEgAAAAAE00QSBtcDQyaXNvbQAAAAFtZGF0AAAAAAAAEXohTMaAB//+fl/BB7eRCgV2mzE3qLQC1u4rDx0KkHPyP1u9BFKZpQkBB8EicZPF5QlOkEJ0CfxejbF3c+XEnaGMrrPIi1pFYX7RSRwfPCfji+Rm0yGDwXUvEbQDhsh2jUC3FkfyaOAfzkXvoQEqnC1FecwjgLVauoVSOWRDynF4XD1zKtfD1DCtfFZSrh98VEfFNJRghlwCehCn5OPSGuv5OW92wL6xXijBoPoR7iE7gq1Psxwd8XKRPwoaKeSNdlSVhTX3MJ0rTBlYIMMspkJnTNIQT1DMAVDDua4RiI33A9Bgso4voe3qbITeimbtNGJEKK3sIjpv14j7p5egilM0oSAn0vkZDH+NyHnXnJPuXnYn4RQQ47xIhprGQaZPAxCCI+PXymDl7blk2fSrBGW/RtGkHDsFCfZZnbOqlBqXrEoaglwjsBP0/81CHifxES7HtySnEZOCI1REkxruZ9h56hax83BiQV0uKLk2G2m2OROyNbBdMEgfGix5wKADUIpkBO4OoOnyb/URHgTSIvUpNkUivz4T40/RMpF135VpOcVi/jaiZkjUTRrzxqK6Um1gYb/vVhfr9VGpnvApXXcq7lVLPTrChM1tMzGeXoyG8hTagEkMw6ZaE5ERc7DQSnE5up6NxLY4gxG+MRABwCF6FGW2B2JhWGSm4jkrn5Pp7YOAIBQC2jq5AHE4l0m5hEQ/8vauaadaV6Rig03RaDMTNhQsLttn2EhHqY+X3Vi09fZuLsxQ6ctFn2fZ3NqSZLKp7maonEbMjAQd46NtmKuntwEGbzYzIVaVpYYjKI/xtGGCpGrjjCDHHi8X6x5qdfKRBYtAvk9FOwaMAn1Hw5StArWbfVLAXvY1ok4xaFbVqVqIhBMClwFKEAAAESQuUDYqDFZqVtXq/4fr56UQOFAFAK3N0z3Txb+17p1TCNJfVvWvz35LZzj8Zz79VIlSRdD0j6zj0OPK2BQfisWi13A5qpo/cvGvZOxf2vNNkqFPaS2N2Vsbt6tjkYDvvvdOjcw2y6ZpkqVVVZVUUtFmpyUWWNCtOJ4shO+7CR3E6URA6TFykd1ADamZJkB3d3rmOw6F4jazKsUzUN+T3nxqhzyh3qx4pwspSnZGTenE98n24zulbEnAgzTqJAWBYC1FVQJViHAhGgj98H///I2Gk2IyWKSIGwkGQkFwkFhIk68qHfyeeEFTyQQKALHxdRAdIoD4QfN9RmuCzV0ano4IIYQkMBLYw5UsuBOd2vYwha4Znoka6T10PtualGszgHPwKlU8/+2wLSGdRh5MxAWArV7MqAY9P+fe+LyuYpn2vqGL6trm2yLxwG13W2cJ3s/fjgpgSVnV3GJoCu4G1jsZoKqVJaCe5MV+y1hERS3hwy94k2xAv/net3ntB/4j9M5gQekdh6OsLB86SKxWRCBOqSBFMaviCl+H3ffUGS3jDY8VEFAbu8dbVHYZIwqCwkceRKV/R+66J0LASgAs+haA4Aw76UDgKJbIpkxhRvKizCNaix0SUwlxHjJCc1zDinkWRn3BKOykJBQt5hOOXyeSspyC6yjO0R11fRvvojZ1CjCkdKDAzBTQyKBreiARne+wEpYRim8EBgivVbR9XRhWqRtwZqMyOnLRchLUivXL0evSiKIQ8/EedgmCROhUA6RgN0PuXCiiNavaTJ78D2o6B7MxCmgroGewObQy5e20Vr4dFhy56RDX2fjofPSxrNBehgIBqIIa+T+l6HdgbanfByEaFFWOD2IyWKTEFwqRgoYhjQk3/Rp+uE4FwEKABLhUwjLPhLZq4TayevWHTW9Wr1waHfBDxqRl4D4dKUF9E9hoSxGo5/KSjwcvDFGCGRNjLKotWpO//S+xTc5SDJalVLHg/6HTKOCnO/NKkVhqfRxGsb0u4jWdKVUfz5b1E7gzwcYhZqTupGdbToNrUvFzgbHuZ2AVAOP2O7lMW7r4s+qBBiNGTzxXQ5vY7climkQHn2zy3M0KkNsoLj2yZFujsvyZoF13aFQfeJ25GGWUgI2wweyCSwudFsFCIu1nj7D6scDgEAKDArr2wfQrMgi+Fy5y/Fs1cjSMsi5NKRu9UIx5OXSgYxCkwR99kgj98ggDdSalWlfV/g4L5QVOsTVYTzzk+TGWrdDiZbKs3ld4n1BoVDKaYPhEUYVkSg+9wP1dfD6LR5yC7LwgU5wvcC+JdOUqms8TFBs9Q0Ob/sjAusvQyrjsZBJnPBlTQOSiwcrd8IpqFkI7oaBA3M84abyu3AUoE1Bk4UhJ7NXutUf8El2o7vwhGgj78H///IWwyWGSIKgsdEj+XK32D27HVxxgAABLHOJvCtjAbsqA6vfq46YbDRcLRAMj5B2lJnMiVSHjocCGH+H6dDaEUbRFMkrysRaKkNeMyq52F+q/JuyNFPVMPzpnhKkAz/7wjkGViMDc4VFIQIHb3ZQZw6PDkbVJCRcYkl3AEUEUANDM0oeFYol7QgzMIcjoCwFFUAwjkqMeszwNW40jpbVXI7PD69wiOkWvFerPV+QlR127inp+RwZbXHNMiV0mX4/HyswzrlSPOO9pVvMZ71+WlJSQBNyWut3h7GxLKJLDJWEkAho/4D+cccCUQJQAJZ2mTwkjQbgl4Drov1KDxKijrq06ABOLJIWM8SoDfRYMYW6GG7xoAvMItlphhOvvz0WpOf0P2HQNG4oL2q4Cpt4GTf45UioVRHlYk2Bux2AKFRLAIN3j3til3crhCfCLR69bYx20K2JIomzfmh3X2PB1JIRGm+Jg2+dE/Ixc4ZCOX51ZfWaVQ5cxEWlKmpg9QGhCms8XZimgIizxKkR8DC8Sv/gm5xBTkbzh3Pr6BbvwIRoI7xB7OXy1sMlhk7PILp/I5P6D+WJ7F89b1eXWcDChLy/QloYAzYoYfNDzjXJFUxgLAANaiZhy7GOFBfRPa9r2Ywz/5lUnmSKJDQyx25yy0NT1T1LhxCpiYvLGsKWyiI9JtWMvbXUC+RO5jABJmYPo10ED4OR2ikapTrZTr+dN+x9luN8+02c3kjEomW7zSWvup51yWYA1l+RpcZrXy1BdAEU5m6syGB1y68Nc+TfP48k3VNP+c6R1P5cWGMoH0H7dhyVyC8uz1c++mxe3d5klx2bJ3sncJbPJZdNfONtVwWroqCkYnel0kZ0BzcTg96EkpHbQCC3jIwoyAjLGx7FKULAmJAkDAWGgToXh4HTL11i93XG9MlRKjYqeGSglpKON9P+W6RoYusLfMwAOMSiSCXWKxPDinIBOndwUmrwxqz3T/+vS3jUS25axUbPH3o1raefpvMlDecmjWk+KVMeyAdyCYbkxHVsANzdNSMiGyTKCkVfenHcooJwDpj67gmFjNU0+geOug+WMoEgT7qKjFY6gvA5iGi88jFXvYgRQUaEro2njsxeESnoOymhCpV8qAKYwQDQRqJb0I3onQWTOQeL6yJX+vJ4BVTHKfTM1AwWOyjxJ1In3WsEiqVFMsOGnbuya+fvK2KstjYb4jFmeqVYJ7aym2UeNmXd+IRoO//i926x9idFiYlhdDOUJrhdtuTXW6OM4osq6rWKgEvKsxj8UIr37u4x2bey34cuAxhyqEjkLVTvaRgLsOKhIbvVLbASQW9czUVC+lNTnOGlJGzfVXoVMtTtt9zF7ZXTUz3VF3N3l3W2r12Wd4GBpc5JjOeblMxO5FKKgp1WDQFBQ74TaAUgMSNbbyC0KdQyE0S1TUcROxcgWZa8bnYgrDSQFTBkIIYINB0hLNzmGrvtvkWrDO2Qp1GCmQCUt6olVNQJSJuthTgE6EbAMErCbpOo7NnQ5seQzrbS8mV9M1VE5MU63g00KN/Hq7EI8nzLrZZ8V93OOvUQCPsansREsSCgSDgKCgTGgKBYKBcGrDweQkzzVWm9MXUq+eMEzEihcLj95i+eM4RfP22CSWRTBI8C5pneFmkYDuDZ12GSMgsK1hrQ4xg4einiWJRnGAHWrgEvpNLAHPkdozM7LvwVtukei8FxaE4UVpyiQ+Oyem/N7ZxcN/20eYuPitICE85F0MJJ4JThIkvEq1qzYG3hR11awmeUbnNwcEQinIorJnRHOuKUr65E/b7CuXUlcI9LsF9pgcqC8rtk6T5V3rAyX6K+NlJxPgtVVCpIUtLT4SjXiFNSqC16Z46ntA4yriETRbbyoqEYp3r1TNvp51t/Gl659bvwhGhRFlYtiYlhYcBYaGZKhBoPR1d0sQVaoIKAkOmRhz4jkRbRzgzGjTzWc+I4GmYPWfiTK3nSsAHyCKnlHfSt60uyNDwXoqa2BzgKGaFcxvWE0QA6hQHDOiFJainWQQ4rUP7V0glyb5LxCrpoHvvoBYPCFcctCUE4/8J2XmaZK3hY0ECA+Lz9H92PsciSRWMjdYs9NgziT3tDjU00xiYDFeE60wVwQAPZSriCK7WHSBIyO72LcU8oDSrGCex5r+CzXyQLtC3TyRXBWB33QbtQRWmVijLaQ23k4ZlPah2O4VFGt44ot8NyCIsZGsYkgLWMIb6pRwBd4tKSgSquqBIZPvsV0u4CtKrjnhFOi5GwYJJ3RSWwwdBCRLwv24SMH9ewRFRTEUpWFretjNRk3IgoaqTVz5WhWglCUusioRtKs2dmNVZKiSxSbLORpLFI0QAwN1QnK65nPmNx2Q5xesHWkBeMXo2k0FbQApmM58iORRECfi5izmIuQ5znYUK5FbfK4kklyBdD2AyizuwVSXRK0E2BIypEYwMzJLFIvSMEKmBODsUNEyxYwETrY2gIGIjI5j5Eiw0XtgyjIBFTc8Pp3bjghGhQ9ihFjYdBaCHAQFpS7CggFQBAgrPznO+HU4MWDUxhEngvuwAUSYeeLrr2a1VEKZx0Yj4HD7laJEogVFr8zqrAbojZPQ4z9V10sHDH96pTvtZ4eRZykhQJgfKvxkBFJgWBeEKcQMaII/SigpQYHNBwEEwhBXa3UnIaqoZWsMGYDmOWzNtokRWEgJSMllAJAK8rwMLaJG+LXGBG6Tqb7aKoapzNkJN2v4+uspoXomgSEAAczaTfM7ga0fR9zokgE4gwb+k/12kn5jxLSutL2YF8xtXNWxdrchWuAJTvD2JUWISQFiINmIQAGL4DrkWKgFIFmCmc2g88+fPHlqrBAB7+lE8BgbFlKgBiTj7M7pCMPgyI5OCGCQmKzrQSgkV8ca5EHyLHt+Kh9APUrLAz5qXMJDQsDCy6aWV82Aicrzi5ocr3U+0AtR7IatFe26g3rCqSsNEhMUWXICUshQZwNQPbMMBlYySm4OhLQTmlxWiqoYFVSIAaCSxrpgU4rCUglct7LaCwLWwIsNBKqktGTSTZcm+DQLMg+riPttNf9gJF0l/lR86H9N1Ox1uf+gFC/W78hGhQ1ihEiYqIYJBYKEYSGCpeK2vhKRnAVKRGWOQRu1yA8D+x/NRe94rS178YwI4qZoD3r9j759PdF/gilKoLfwtaXKap7rtY29dp7srocBXqD7pd554++DSmqMtYd3e0al0mm5l4uZOl8wog37m8XeNCc7lTKwiQNqMzPm9Ld2oAuHxOm9LuROd2ak97lMBnxePslqa4T6qzVzFTqwLJSIaj0xCMRkjVNdkmEvo2ki3fBMSAAel4PH9eU+VCvc07fICtLcOh4LfbOORavbs8/kiLotbu+goc5KUbu8HY2Io7Ej2Cg2OggNoBYQqyZYBgEcAWfFXDOosKfbYfGYmNToNAzt0ZGlE1WsmBwMbqdKMqRfpkITR2OqdWCpVMaXTpay0xdQs3NExg2j4G+3e8co3+B8khh6SuM8XfCSDis0r0EAeXXXn3KUprBDwCCQem/qv5/nwyPkHlau60GaF7gBIAZxh6rxF2mdb5JFnxNZJwK2BujWdSCcVIq0EgODoZ3CgcphaUZCeMJHVbUNhWhpkJzY0CLYERSwdJC7XJWF25yUexFYoLqnfgAAAONbW9vdgAAAGxtdmhkAAAAANfIAsvXyALLAAAD6AAAAH8AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAfp0cmFrAAAAXHRraGQAAAAB18gCy9fIAssAAAABAAAAAAAAAH8AAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAOdGdhcwAAAAAAAAAAAYhtZGlhAAAAIG1kaGQAAAAA18gCy9fIAssAALuAAAAoAFXEAAAAAAAxaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAENvcmUgTWVkaWEgQXVkaW8AAAABL21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA83N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAQAEgICAFEAVAAAAAAI2cgACNnIFgICAAhGQBoCAgAECAAAAGHN0dHMAAAAAAAAAAQAAAAoAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAAKAAAAAQAAADxzdHN6AAAAAAAAAAAAAAAKAAAB7gAAAXUAAAG7AAABkwAAAaUAAAH+AAAB9wAAAcIAAAGzAAABqgAAABRzdGNvAAAAAAAAAAEAAAAsAAABH3VkdGEAAAEXbWV0YQAAAAAAAAAiaGRscgAAAAAAAAAAbWRpcgAAAAAAAAAAAAAAAAAAAAAA6Wlsc3QAAAC8LS0tLQAAABxtZWFuAAAAAGNvbS5hcHBsZS5pVHVuZXMAAAAUbmFtZQAAAABpVHVuU01QQgAAAIRkYXRhAAAAAQAAAAAgMDAwMDAwMDAgMDAwMDBDNDAgMDAwMDAzRUYgMDAwMDAwMDAwMDAwMTdEMSAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMCAwMDAwMDAwMAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ny40MS4xMDA=');
    soundNextAudio.onerror = function() {
        soundNextAudioDoesNotExist = true;
    };
    soundNextAudio.onended = function () {
        if (soundNextColdPlay) return;
        setTimeout(function () {
            alanAudio.skipExternalSounds(false);
        }, 100);
    };
    soundNextAudio.onplay = function () {
        if (soundNextColdPlay) return;
        alanAudio.skipExternalSounds(true);
    };

    // Specify layers for different statets to make smooth animation
    var btnBgDefault = document.createElement('div');
    var btnBgListening = document.createElement('div');
    var btnBgSpeaking = document.createElement('div');
    var btnBgIntermediate = document.createElement('div');
    var btnBgUnderstood = document.createElement('div');

    // Specify layers with ovals
    var btnOval1 = document.createElement('div');
    var btnOval2 = document.createElement('div');

    // Some variables for setting up right properties for Alan Btn
    var btnSize;
    var sideBtnPos;
    var bottomBtnPos;
    var topBtnPos;
    var initRightPos;
    var btnZIndex;
    var btnIconsZIndex;
    var btnTextPanelsZIndex;
    var btnBgLayerZIndex;

    var popupIsVisible = false;

    //#region Listen online/offline events to manage connected/disconnected states
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    function updateOnlineStatus() {
        if (navigator.onLine) {
            switchState(getDefaultBtnState());
        } else {
            alanAudio.stop();
            switchState(OFFLINE);
        }
    }

    function getDefaultBtnState(state) {
        if (!isOriginSecure()){
            return NOT_SECURE_ORIGIN;
        }
        if (isAudioSupported()) {
            return state || DEFAULT;
        }
        return NO_VOICE_SUPPORT;
    }

    //#endregion

    //#region Define settings based on the btn mode
    // For now we have two modes: small - for tutor, and big for demo
    var btnModes = {
        "tutor": {
            btnSize: 44,
            rightPos: 0,
            leftPos: 0,
            bottomPos: 0,
            topPos: 0,
        },
        "demo": {
            btnSize: options.size || 64,
            rightPos: 20,
            leftPos: 20,
            bottomPos: 40,
            topPos: 0,
        },
        "component": {
            btnSize: options.size || 64,
            rightPos: 20,
            leftPos: 20,
            bottomPos: 40,
            topPos: 0,
        }
    };

    function isTutorMode() {
        return mode.indexOf('tutor') > -1;
    }

    function isPreviewMode() {
        return mode.indexOf('preview') > -1;
    }

    //#endregion

    //#region Set styles for base layers

    btnSize = btnModes[mode].btnSize;

    function setDefautlPositionProps(value) {
        if (/^\d+$/.test(value)) {
            return value + 'px';
        }
        return value;
    }

    function findHighestZIndex() {
        var elements = document.getElementsByTagName("*");
        var defaultZIndex = 4;
        for (var i = 0; i < elements.length; i++) {
            var zindex = Number.parseInt(
                document.defaultView.getComputedStyle(elements[i], null).getPropertyValue("z-index"),
                10
            );
            if (zindex > defaultZIndex) {
                defaultZIndex = zindex;
            }
        }
        return defaultZIndex;
    }

    btnZIndex = options.zIndex || (findHighestZIndex() + 1);
    btnIconsZIndex = btnZIndex - 2;
    btnTextPanelsZIndex = btnZIndex - 1;
    btnBgLayerZIndex = btnZIndex - 3;

    // Define styles for root element

    if (btnZIndex) {
        rootEl.style.zIndex =  btnZIndex;
    }
    
    rootEl.style.position = options.position ? options.position : 'fixed';
    setButtonPosition();

    // Define styles for block with recognised text
    recognisedTextContent.classList.add('alanBtn-recognised-text-content');
    recognisedTextHolder.classList.add('alanBtn-recognised-text-holder');

    setTextPanelPosition(recognisedTextHolder);

    function setButtonPosition(keepBtnPosition) {
        var _savedBtnPosition = keepBtnPosition ? getSavedBtnPosition() : null;

        if (_savedBtnPosition) {
            if (_savedBtnPosition.orientation === 'left') {
                options.left = _savedBtnPosition.x;
                options.top = _savedBtnPosition.y;
            }
            if (_savedBtnPosition.orientation === 'right') {
                options.right = _savedBtnPosition.x;
                options.top = _savedBtnPosition.y;
            }
        }

        if (options.left !== undefined) {
            isLeftAligned = true;
            isRightAligned = false;
        }
        if (options.top !== undefined) {
            isTopAligned = true;
            isBottomAligned = false;
        }

        if (isLeftAligned) {
            sideBtnPos = setDefautlPositionProps(options.left !== undefined ? options.left : btnModes[mode].leftPos);
        } else {
            sideBtnPos = setDefautlPositionProps(options.right !== undefined ? options.right : btnModes[mode].rightPos);
            initRightPos = parseInt(sideBtnPos, 10);
        }

        rootEl.style[isLeftAligned ? 'left' : 'right'] = sideBtnPos;
        setDefaultBtnHorizontalPosition();
    }

    function setDefaultBtnHorizontalPosition(){
        if (isTopAligned) {
            topBtnPos = setDefautlPositionProps(options.top !== undefined ? options.top : btnModes[mode].topPos);
        } else {
            bottomBtnPos = setDefautlPositionProps(options.bottom !== undefined ? options.bottom : btnModes[mode].bottomPos);
        }

        if (isTopAligned) {
            rootEl.style.top = topBtnPos;
            rootEl.style.setProperty('bottom', '');
        } else {
            rootEl.style.bottom = bottomBtnPos;
            rootEl.style.setProperty('top', '');
        }
    }

    function setTextPanelPosition(el, topPos) {
        var _btnSize = parseInt(btnSize, 10);

        if (isLeftAligned) {
            el.style.textAlign = 'left';
            el.style.right = '';
            el.style.left = (absolutePosition ? 0 : parseInt(rootEl.style.left, 10)) + _btnSize + 10 + 'px';
        } else {
            el.style.textAlign = 'right';
            el.style.left = '';
            el.style.right = (absolutePosition ? 0 : parseInt(rootEl.style.right, 10)) + _btnSize + 10 + 'px';
        }

        if (!topPos) {
            if (isTopAligned) {
                el.style.bottom = '';
                el.style.top = (absolutePosition ? 0 : parseInt(rootEl.style.top, 10)) + _btnSize / 2 + 'px';
            } else {
                el.style.top = '';
                el.style.bottom = (absolutePosition ? 0 : parseInt(rootEl.style.bottom, 10)) + _btnSize / 2 + 'px';
            }
        }

        if (absolutePosition) {
            el.style.position = 'absolute';
        }
        if (topPos) {
            el.style.bottom = '';
            el.style.top = (absolutePosition ? 0 : topPos) + _btnSize / 2   + 'px';
            el.style.setProperty('transform', 'translateY(-50%)', 'important');
        }
        el.style.zIndex = btnTextPanelsZIndex;
    }

    function setStylesBasedOnSide() {
        if (isLeftAligned) {
            btn.style.left = 0;
            btn.style.right = '';
            recognisedTextHolder.classList.remove('left-side');
            recognisedTextHolder.classList.add('right-side');
        } else {
            btn.style.right = 0;
            btn.style.left = '';
            recognisedTextHolder.classList.remove('right-side');
            recognisedTextHolder.classList.add('left-side');
        }
    }

    function applyBtnSizeOptions(size) {
        btnSize = size;
        btn.style.width = size + 'px';
        btn.style.minWidth = size + 'px';
        btn.style.maxWidth = size + 'px';
        btn.style.minHeight = size + 'px';
        btn.style.height = size + 'px';
        btn.style.maxHeight = size + 'px';

        rootEl.style.width = size + 'px';
        rootEl.style.minWidth = size + 'px';
        rootEl.style.maxWidth = size + 'px';
        rootEl.style.minHeight = size + 'px';
        rootEl.style.height = size + 'px';
        rootEl.style.maxHeight = size + 'px';

        if (isMobile()) {
            recognisedTextHolder.style.maxWidth = 'calc(100vw - ' + (parseInt(sideBtnPos,10) + parseInt(btnSize,10) + 20) + 'px)';
        }

        applySizeSettingsToBlurLayers([btnOval1, btnOval2]);
    }

    // Define base styles for btn
    btn.style.color = '#fff';
    btn.style.position = 'absolute';
    var transitionCss = 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out';

    applyBtnSizeOptions(btnSize);

    if (isTopAligned) {
        btn.style.top = 0;
    } else {
        btn.style.bottom = 0;
    }
    setStylesBasedOnSide();
    btn.style.borderRadius = '50%';
    // btn.style.boxShadow = '0 8px 10px 0 rgba(0, 75, 144, 0.35)';
    btn.style.textAlign = 'center';
    btn.style.transition = transitionCss;
    btn.style.zIndex = btnZIndex;

    // Specify tabIndex if it exists in options
    if (options && options.tabIndex) {
        btn.tabIndex = options.tabIndex;
    }

    // Specify cursor for btn
    if (isPreviewMode()) {
        btn.style.cursor = 'default';
    } else {
        if(!isMobile()) {
            btn.style.cursor = 'pointer';
        }    
    }

    // Define base styles for microphone btn
    micIconDiv.style.minHeight = '100%';
    micIconDiv.style.height = '100%';
    micIconDiv.style.maxHeight = '100%';
    micIconDiv.style.top = '0%';
    micIconDiv.style.left = '0%';
    micIconDiv.style.zIndex = btnIconsZIndex;
    micIconDiv.style.position = 'relative';
    micIconDiv.style.transition = transitionCss;

    function setUpStylesForAnimatedLogoParts(logos) {
        for (var i = 0; i < logos.length; i++) {
            logos[i].style.minHeight = '100%';
            logos[i].style.height = '100%';
            logos[i].style.maxHeight = '100%';
            logos[i].style.minWidth = '100%';
            logos[i].style.width = '100%';
            logos[i].style.maxWidth = '100%';
            logos[i].style.top = '0%';
            logos[i].style.left = '0%';
            logos[i].style.position = 'absolute';
            logos[i].style.pointerEvents = 'none';
            logos[i].style.animationIterationCount = 'infinite';
            logos[i].style.animationDuration = '9s';
            logos[i].style.animationTimingFunction = 'ease-in-out';
            logos[i].style.opacity = 0;
            logos[i].alt = alanAltText + ' logo animated part ' + i;
            micIconDiv.appendChild(logos[i]);
        }
    }

    logoState1.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAxPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEMzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOS42NDAwMDEsMS40OTU0Njg1IEMxOS4xNjEyODQ2LDAuNTc2MzMzMDYgMTguMjEyMTgsLTEuMjE3ODgzODNlLTE0IDE3LjE3NzI2NTMsLTEuNDIxMDg1NDdlLTE0IEwzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IFogTTI4LjM1OTk5OSwxLjQ5NTQ2ODUgQzI4LjgyNDcxODksMC42MDMyMDY0MiAyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgTDMwLjk0NDQ0NDQsLTEuNDIxMDg1NDdlLTE0IEwzMC44MjI3MzQ3LC0xLjIzNzUxMTgzZS0xNCBDMzAuNzkyNDc2MywtMS4yMzE1ODY5M2UtMTQgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDI4LjM1OTk5OSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlLTIiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
    logoState2.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEwxNS40OTkxNjU5LDEuMTIxNjAxMzggQzE1Ljg0NjA3ODEsMC40NTU1Mjk5NjQgMTYuNTIyMzU1NSwwLjAyOTQ4ODMzMzUgMTcuMjY3ODExLDAuMDAxNDcyMTgxMTUgQzE4LjI2NzI3NzEsMC4wMzM5OTQyODkxIDE5LjE3NTI4MTEsMC42MDMyMDY0MiAxOS42NDAwMDEsMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOC4yNzExOTI0LDIxIFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LDEuODU4NDEzMzFlLTE1IDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgTDMwLjk0NDQ0NDQsMCBMMzAuODIyNzM0NywxLjgzNTczNjRlLTE1IEMzMC43OTI0NzYzLDEuODk0OTg1MzllLTE1IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgQzMwLjY3OTk5NSwxLjg1ODQxMzMxZS0xNSAzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjguMzU5OTk5LDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTkuNjQwMDAxLDEuNDk1NDY4NSBDMTkuMTYxMjg0NiwwLjU3NjMzMzA2IDE4LjIxMjE4LDIuMDMyMDE2NDNlLTE1IDE3LjE3NzI2NTMsMCBMMzAuNjUzNzgyMywxLjg1MzU4OTc1ZS0xNSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
    logoState3.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjkiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgQzMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwtMS4yMTc4ODM4M2UtMTQgMTcuMTc3MjY1MywtMS40MjEwODU0N2UtMTQgTDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
    logoState4.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTcuMjM3NzA4OSwwLjAwMDQ5MjY3MjYzNSAxNy4yMDc1MjM3LDEuOTU5OTMzNjZlLTE0IDE3LjE3NzI2NTMsMS45NTM5OTI1MmUtMTQgTDMwLjY1Mzc4MjMsMi4xMzkzNTE1ZS0xNCBDMzAuNjc5OTk1LDIuMTM5ODMzODVlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
    logoState5.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA1PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguMzU5OTk5LDEuNDk1NDY4NSBDMjguODI0NzE4OSwwLjYwMzIwNjQyIDI5LjczMjcyMjksMC4wMzM5OTQyODkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBMMzAuOTQ0NDQ0NCwtMS40MjEwODU0N2UtMTQgTDMwLjgyMjczNDcsLTEuMjM3NTExODNlLTE0IEMzMC43OTI0NzYzLC0xLjIzMTU4NjkzZS0xNCAzMC43NjIyOTExLDAuMDAwNDkyNjcyNjM1IDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMS40Nzc2NDQ1LDAuMDI5NDg4MzMzNSAzMi4xNTM5MjE5LDAuNDU1NTI5OTY0IDMyLjUwMDgzNDEsMS4xMjE2MDEzOCBMNDcuNTIzNTAyOSwyOS45NjUxMjU2IEM0Ny42MjY5ODQ0LDMwLjE2MzgxIDQ3LjY4MTAyMzksMzAuMzg0NTk0OCA0Ny42ODEwMjM5LDMwLjYwODY5NTcgQzQ3LjY4MTAyMzksMzEuMzc3MDkxOCA0Ny4wNTkxOTcyLDMyIDQ2LjI5MjEzNTEsMzIgTDM2Ljc5MDY2MjIsMzIgQzM2LjAxNDQ3NjEsMzIgMzUuMzAyNjQ3NywzMS41Njc3NTAyIDM0Ljk0MzYxMDQsMzAuODc4Mzk4NiBMMjQsOS44NjY2NjY2NyBMMjguMzU5OTk5LDEuNDk1NDY4NSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEMzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOS42NDAwMDEsMS40OTU0Njg1IEMxOS4xNjEyODQ2LDAuNTc2MzMzMDYgMTguMjEyMTgsLTEuMjE3ODgzODNlLTE0IDE3LjE3NzI2NTMsLTEuNDIxMDg1NDdlLTE0IEwzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LjI3MTE5MjQsMjEgTDIzLjk1NjQ1ODIsMjEgQzI0LjczMDk1NjIsMjAuOTk5ODkzOSAyNS40NDE1ODY3LDIxLjI5NTM4NDggMjUuODAxNDg0NiwyMS45ODIzNzY3IEwyOS45ODE5MDE1LDI5Ljk2MjE3NjkgQzMwLjMzODM0NCwzMC42NDI1NzMyIDMwLjA3NjY4NTIsMzEuNDgzNTk5NyAyOS4zOTc0NzAxLDMxLjg0MDY2MjEgQzI5LjE5ODM4MzgsMzEuOTQ1MzIxNSAyOC45NzY5MDkzLDMyIDI4Ljc1MjA3MzgsMzIgTDExLjIwOTMzNzgsMzIgTDEuNzA3ODY0OTUsMzIgQzAuOTQwODAyNzk2LDMyIDAuMzE4OTc2MDU5LDMxLjM3NzA5MTggMC4zMTg5NzYwNTksMzAuNjA4Njk1NyBDMC4zMTg5NzYwNTksMzAuMzg0NTk0OCAwLjM3MzAxNTYxOCwzMC4xNjM4MSAwLjQ3NjQ5NzEwNiwyOS45NjUxMjU2IEw0LjYzMDYyNzg1LDIxLjk4OTE5NDUgQzQuOTg5NjE3NzYsMjEuMjk5OTMzOSA1LjcwMTMxMTAxLDIxLjAwMDEwNjMgNi40NzczOTQ2NiwyMSBMMTguMjcxMTkyNCwyMSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
    logoState6.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA2PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzAuNjUzNzgyMywxLjg1MzU4OTc1ZS0xNSBMMzAuOTQ0NDQ0NCwwIEwzMC44MjI3MzQ3LDEuODM1NzM2NGUtMTUgQzMwLjc5MjQ3NjMsMS44OTQ5ODUzOWUtMTUgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwyLjAzMjAxNjQzZS0xNSAxNy4xNzcyNjUzLDAgTDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuMyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
    logoState7.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA3PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEwxNS40OTkxNjU5LDEuMTIxNjAxMzggQzE1Ljg0NjA3ODEsMC40NTU1Mjk5NjQgMTYuNTIyMzU1NSwwLjAyOTQ4ODMzMzUgMTcuMjY3ODExLDAuMDAxNDcyMTgxMTUgQzE4LjI2NzI3NzEsMC4wMzM5OTQyODkxIDE5LjE3NTI4MTEsMC42MDMyMDY0MiAxOS42NDAwMDEsMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IEwxOC4yNzExOTI0LDIxIFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguMzU5OTk5LDEuNDk1NDY4NSBDMjguODI0NzE4OSwwLjYwMzIwNjQyIDI5LjczMjcyMjksMC4wMzM5OTQyODkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjY3OTk5NSwxLjg1ODQxMzMxZS0xNSAzMC42NTM3ODIzLDEuODUzNTg5NzVlLTE1IEwzMC45NDQ0NDQ0LDAgTDMwLjgyMjczNDcsMS44MzU3MzY0ZS0xNSBDMzAuNzkyNDc2MywxLjg5NDk4NTM5ZS0xNSAzMC43NjIyOTExLDAuMDAwNDkyNjcyNjM1IDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMzMS40Nzc2NDQ1LDAuMDI5NDg4MzMzNSAzMi4xNTM5MjE5LDAuNDU1NTI5OTY0IDMyLjUwMDgzNDEsMS4xMjE2MDEzOCBMNDcuNTIzNTAyOSwyOS45NjUxMjU2IEM0Ny42MjY5ODQ0LDMwLjE2MzgxIDQ3LjY4MTAyMzksMzAuMzg0NTk0OCA0Ny42ODEwMjM5LDMwLjYwODY5NTcgQzQ3LjY4MTAyMzksMzEuMzc3MDkxOCA0Ny4wNTkxOTcyLDMyIDQ2LjI5MjEzNTEsMzIgTDM2Ljc5MDY2MjIsMzIgQzM2LjAxNDQ3NjEsMzIgMzUuMzAyNjQ3NywzMS41Njc3NTAyIDM0Ljk0MzYxMDQsMzAuODc4Mzk4NiBMMjQsOS44NjY2NjY2NyBMMjguMzU5OTk5LDEuNDk1NDY4NSBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC42NTM3ODIzLDEuODUzNTg5NzVlLTE1IEMzMC42Nzk5OTUsMS44NTg0MTMzMWUtMTUgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwyLjAzMjAxNjQzZS0xNSAxNy4xNzcyNjUzLDAgTDMwLjY1Mzc4MjMsMS44NTM1ODk3NWUtMTUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC41Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";
    logoState8.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgQzMwLjY3OTk5NSwtMS4yMzUyNDQxNGUtMTQgMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMjguODI0NzE4OSwwLjYwMzIwNjQyIDI4LjM1OTk5OSwxLjQ5NTQ2ODUgTDI0LDkuODY2NjY2NjcgTDE5LjY0MDAwMSwxLjQ5NTQ2ODUgQzE5LjE2MTI4NDYsMC41NzYzMzMwNiAxOC4yMTIxOCwtMS4yMTc4ODM4M2UtMTQgMTcuMTc3MjY1MywtMS40MjEwODU0N2UtMTQgTDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
    logoState9.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTA5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMDkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTcuMjM3NzA4OSwwLjAwMDQ5MjY3MjYzNSAxNy4yMDc1MjM3LDEuOTU5OTMzNjZlLTE0IDE3LjE3NzI2NTMsMS45NTM5OTI1MmUtMTQgTDMwLjY1Mzc4MjMsMi4xMzkzNTE1ZS0xNCBDMzAuNjc5OTk1LDIuMTM5ODMzODVlLTE0IDMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzI5LjczMjcyMjksMC4wMzM5OTQyODkxIDI4LjgyNDcxODksMC42MDMyMDY0MiAyOC4zNTk5OTksMS40OTU0Njg1IEwyNCw5Ljg2NjY2NjY3IFoiIGlkPSJzaGFwZS0yIiBmaWxsLW9wYWNpdHk9IjAuOSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTguMjcxMTkyNCwyMSBMMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEMxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTEuOTg1NTIzOSwzMiAxMS4yMDkzMzc4LDMyIEwxLjcwNzg2NDk1LDMyIEMwLjk0MDgwMjc5NiwzMiAwLjMxODk3NjA1OSwzMS4zNzcwOTE4IDAuMzE4OTc2MDU5LDMwLjYwODY5NTcgQzAuMzE4OTc2MDU5LDMwLjM4NDU5NDggMC4zNzMwMTU2MTgsMzAuMTYzODEgMC40NzY0OTcxMDYsMjkuOTY1MTI1NiBMNC42MzA2Mjc4NSwyMS45ODkxOTQ1IEM0Ljk4OTYxNzc2LDIxLjI5OTkzMzkgNS43MDEzMTEwMSwyMS4wMDAxMDYzIDYuNDc3Mzk0NjYsMjEgTDE4LjI3MTE5MjQsMjEgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBDMTEuOTg1NTIzOSwzMiAxMi42OTczNTIzLDMxLjU2Nzc1MDIgMTMuMDU2Mzg5NiwzMC44NzgzOTg2IEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zNTk5OTksMS40OTU0Njg1IEMyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjkuNzMyNzIyOSwwLjAzMzk5NDI4OTEgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMwLjcwNjEzNDIsMC4wMDA0OTI5NzU2OTEgMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC42NTM3ODIzLC0xLjIzNTcyNjVlLTE0IEwzMC45NDQ0NDQ0LC0xLjQyMTA4NTQ3ZS0xNCBMMzAuODIyNzM0NywtMS4yMzc1MTE4M2UtMTQgQzMwLjc5MjQ3NjMsLTEuMjMxNTg2OTNlLTE0IDMwLjc2MjI5MTEsMC4wMDA0OTI2NzI2MzUgMzAuNzMyMTg5LDAuMDAxNDcyMTgxMTUgQzMxLjQ3NzY0NDUsMC4wMjk0ODgzMzM1IDMyLjE1MzkyMTksMC40NTU1Mjk5NjQgMzIuNTAwODM0MSwxLjEyMTYwMTM4IEw0Ny41MjM1MDI5LDI5Ljk2NTEyNTYgQzQ3LjYyNjk4NDQsMzAuMTYzODEgNDcuNjgxMDIzOSwzMC4zODQ1OTQ4IDQ3LjY4MTAyMzksMzAuNjA4Njk1NyBDNDcuNjgxMDIzOSwzMS4zNzcwOTE4IDQ3LjA1OTE5NzIsMzIgNDYuMjkyMTM1MSwzMiBMMzYuNzkwNjYyMiwzMiBDMzYuMDE0NDc2MSwzMiAzNS4zMDI2NDc3LDMxLjU2Nzc1MDIgMzQuOTQzNjEwNCwzMC44NzgzOTg2IEwyNCw5Ljg2NjY2NjY3IEwyOC4zNTk5OTksMS40OTU0Njg1IFoiIGlkPSJzaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
    logoState10.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1sb2dvLXN0YXRlLTEwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWxvZ28tc3RhdGUtMTAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDIxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNjQwMDAxLDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTguMjcxMTkyNCwyMSBMNi40NzczOTQ2NiwyMSBDNS43MDEzMTEwMSwyMS4wMDAxMDYzIDQuOTg5NjE3NzYsMjEuMjk5OTMzOSA0LjYzMDYyNzg1LDIxLjk4OTE5NDUgTDE1LjQ5OTE2NTksMS4xMjE2MDEzOCBDMTUuODQ2MDc4MSwwLjQ1NTUyOTk2NCAxNi41MjIzNTU1LDAuMDI5NDg4MzMzNSAxNy4yNjc4MTEsMC4wMDE0NzIxODExNSBDMTguMjY3Mjc3MSwwLjAzMzk5NDI4OTEgMTkuMTc1MjgxMSwwLjYwMzIwNjQyIDE5LjY0MDAwMSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjA5MzM3OCwzMiBMMS43MDc4NjQ5NSwzMiBDMC45NDA4MDI3OTYsMzIgMC4zMTg5NzYwNTksMzEuMzc3MDkxOCAwLjMxODk3NjA1OSwzMC42MDg2OTU3IEMwLjMxODk3NjA1OSwzMC4zODQ1OTQ4IDAuMzczMDE1NjE4LDMwLjE2MzgxIDAuNDc2NDk3MTA2LDI5Ljk2NTEyNTYgTDQuNjMwNjI3ODUsMjEuOTg5MTk0NSBDNC45ODk2MTc3NiwyMS4yOTk5MzM5IDUuNzAxMzExMDEsMjEuMDAwMTA2MyA2LjQ3NzM5NDY2LDIxIEwxOC4yMDEzODg5LDIxIEwxOC4yNzExOTI0LDIwLjg2NTk3NzMgTDIzLjk1NjQ1ODIsMjAuODY1MTk4MyBDMjQuNzMwOTU2MiwyMC44NjUwOTIyIDI1LjQ0MTU4NjcsMjEuMjk1Mzg0OCAyNS44MDE0ODQ2LDIxLjk4MjM3NjcgTDI5Ljk4MTkwMTUsMjkuOTYyMTc2OSBDMzAuMzM4MzQ0LDMwLjY0MjU3MzIgMzAuMDc2Njg1MiwzMS40ODM1OTk3IDI5LjM5NzQ3MDEsMzEuODQwNjYyMSBDMjkuMTk4MzgzOCwzMS45NDUzMjE1IDI4Ljk3NjkwOTMsMzIgMjguNzUyMDczOCwzMiBMMTEuMjA5MzM3OCwzMiBaIiBpZD0ic2hhcGUtMiIgZmlsbC1vcGFjaXR5PSIwLjMiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI4LjM1OTk5OSwxLjQ5NTQ2ODUgQzI4LjgyNDcxODksMC42MDMyMDY0MiAyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzAuNzA2MTM0MiwwLjAwMDQ5Mjk3NTY5MSAzMC42Nzk5OTUsLTEuMjM1MjQ0MTRlLTE0IDMwLjY1Mzc4MjMsLTEuMjM1NzI2NWUtMTQgTDMwLjk0NDQ0NDQsLTEuNDIxMDg1NDdlLTE0IEwzMC44MjI3MzQ3LC0xLjIzNzUxMTgzZS0xNCBDMzAuNzkyNDc2MywtMS4yMzE1ODY5M2UtMTQgMzAuNzYyMjkxMSwwLjAwMDQ5MjY3MjYzNSAzMC43MzIxODksMC4wMDE0NzIxODExNSBDMzEuNDc3NjQ0NSwwLjAyOTQ4ODMzMzUgMzIuMTUzOTIxOSwwLjQ1NTUyOTk2NCAzMi41MDA4MzQxLDEuMTIxNjAxMzggTDQ3LjUyMzUwMjksMjkuOTY1MTI1NiBDNDcuNjI2OTg0NCwzMC4xNjM4MSA0Ny42ODEwMjM5LDMwLjM4NDU5NDggNDcuNjgxMDIzOSwzMC42MDg2OTU3IEM0Ny42ODEwMjM5LDMxLjM3NzA5MTggNDcuMDU5MTk3MiwzMiA0Ni4yOTIxMzUxLDMyIEwzNi43OTA2NjIyLDMyIEMzNi4wMTQ0NzYxLDMyIDM1LjMwMjY0NzcsMzEuNTY3NzUwMiAzNC45NDM2MTA0LDMwLjg3ODM5ODYgTDI0LDkuODY2NjY2NjcgTDI4LjM1OTk5OSwxLjQ5NTQ2ODUgWiIgaWQ9InNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBDMzAuNjc5OTk1LC0xLjIzNTI0NDE0ZS0xNCAzMC43MDYxMzQyLDAuMDAwNDkyOTc1NjkxIDMwLjczMjE4OSwwLjAwMTQ3MjE4MTE1IEMyOS43MzI3MjI5LDAuMDMzOTk0Mjg5MSAyOC44MjQ3MTg5LDAuNjAzMjA2NDIgMjguMzU5OTk5LDEuNDk1NDY4NSBMMjQsOS44NjY2NjY2NyBMMTkuNjQwMDAxLDEuNDk1NDY4NSBDMTkuMTYxMjg0NiwwLjU3NjMzMzA2IDE4LjIxMjE4LC0xLjIxNzg4MzgzZS0xNCAxNy4xNzcyNjUzLC0xLjQyMTA4NTQ3ZS0xNCBMMzAuNjUzNzgyMywtMS4yMzU3MjY1ZS0xNCBaIiBpZD0ic2hhcGUiIGZpbGwtb3BhY2l0eT0iMC45Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";

    setUpStylesForAnimatedLogoParts([
        logoState1,
        logoState2,
        logoState3,
        logoState4,
        logoState5,
        logoState6,
        logoState7,
        logoState8,
        logoState9,
        logoState10,
    ]);

    // Define base styles for triangle bellow the microphone btn
    defaultStateBtnIconImg.alt = alanAltText + ' button icon for idle state';
    listenStateBtnIconImg.alt = alanAltText + ' button icon for listening state';
    processStateBtnIconImg.alt = alanAltText + ' button icon for processing state';
    replyStateBtnIconImg.alt = alanAltText + ' button icon for reply state';

    var logoImgs = [
        defaultStateBtnIconImg,
        listenStateBtnIconImg,
        processStateBtnIconImg,
        replyStateBtnIconImg
    ];
    defaultStateBtnIconImg.src = micIconSrc;
    for (var i = 0; i < logoImgs.length; i++) {
        var logoImgEl = logoImgs[i];
        logoImgEl.style.minHeight = '100%';
        logoImgEl.style.height = '100%';
        logoImgEl.style.maxHeight = '100%';
        logoImgEl.style.minWidth = '100%';
        logoImgEl.style.width = '100%';
        logoImgEl.style.maxWidth = '100%';
        logoImgEl.style.top = '0%';
        logoImgEl.style.left = '0%';
        logoImgEl.style.position = 'absolute';
        logoImgEl.style.pointerEvents = 'none';
        logoImgEl.style.borderRadius = '50%';
        micIconDiv.appendChild(logoImgEl);
    }

    roundedTriangleIconDiv.style.minHeight = '100%';
    roundedTriangleIconDiv.style.height = '100%';
    roundedTriangleIconDiv.style.maxHeight = '100%';
    roundedTriangleIconDiv.style.minWidth = '100%';
    roundedTriangleIconDiv.style.width = '100%';
    roundedTriangleIconDiv.style.maxWidth = '100%';
    roundedTriangleIconDiv.style.top = '0%';
    roundedTriangleIconDiv.style.left = '0%';
    roundedTriangleIconDiv.style.zIndex = btnIconsZIndex;
    roundedTriangleIconDiv.style.position = 'absolute';
    roundedTriangleIconDiv.style.opacity = 0;
    roundedTriangleIconDiv.style.transition = transitionCss;
    roundedTriangleIconDiv.style.overflow = 'hidden';
    roundedTriangleIconDiv.style.borderRadius = '50%';
    roundedTriangleIconDiv.style.backgroundSize = '100% 100%';
    roundedTriangleIconDiv.style.backgroundPosition = 'center center';
    roundedTriangleIconDiv.style.backgroundRepeat = 'no-repeat';
    roundedTriangleIconDiv.alt = alanAltText + ' microphone icon';
    roundedTriangleIconDiv.classList.add('triangleMicIconBg');
    roundedTriangleIconDiv.classList.add('triangleMicIconBg-default');

    circleIconDiv.style.minHeight = '100%';
    circleIconDiv.style.height = '100%';
    circleIconDiv.style.maxHeight = '100%';
    circleIconDiv.style.minWidth = '100%';
    circleIconDiv.style.width = '100%';
    circleIconDiv.style.maxWidth = '100%';
    circleIconDiv.style.top = '0%';
    circleIconDiv.style.left = '0%';
    circleIconDiv.style.zIndex = btnIconsZIndex;
    circleIconDiv.style.position = 'absolute';
    circleIconDiv.style.opacity = 0;
    circleIconDiv.style.transition = transitionCss;
    circleIconDiv.style.overflow = 'hidden';
    circleIconDiv.style.borderRadius = '50%';
    circleIconDiv.style.backgroundSize = '0% 0%';
    circleIconDiv.style.backgroundPosition = 'center center';
    circleIconDiv.style.backgroundRepeat = 'no-repeat';
    circleIconDiv.alt = alanAltText + ' microphone circle icon';
    circleIconDiv.classList.add('circleMicIconBg');

    // Define base styles for loader mic icon in disconnected state
    disconnectedMicLoaderIconImg.style.minHeight = '70%';
    disconnectedMicLoaderIconImg.style.height = '70%';
    disconnectedMicLoaderIconImg.style.maxHeight = '70%';
    disconnectedMicLoaderIconImg.style.top = '15%';
    disconnectedMicLoaderIconImg.style.left = '15%';
    disconnectedMicLoaderIconImg.style.zIndex = btnIconsZIndex;
    disconnectedMicLoaderIconImg.style.position = 'absolute';
    disconnectedMicLoaderIconImg.style.transition = transitionCss;
    disconnectedMicLoaderIconImg.style.opacity = '0';
    disconnectedMicLoaderIconImg.alt = alanAltText + ' disconnected microphone icon';
    disconnectedMicLoaderIconImg.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiB2aWV3Qm94PSIwIDAgMTkyIDE5MiI+CiAgICA8ZyBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTk2IDBjNTMuMDIgMCA5NiA0Mi45OCA5NiA5NnMtNDIuOTggOTYtOTYgOTZTMCAxNDkuMDIgMCA5NiA0Mi45OCAwIDk2IDB6IiBvcGFjaXR5PSIuMDIiLz4KICAgICAgICA8cGF0aCBkPSJNMTMxLjk2NiAxOS4wOTJjLTMwLTE0LTY1LjI4NC05Ljg0OS05MS4xNDIgMTIuNTc1QzE0Ljk2NiA1NC4wOTIgNi44NSA4My44MSAxMi45MDggMTEzLjk1YzYuMDU4IDMwLjE0MiAzMC4zMDIgNTYuMTkgNjAuMDU4IDY0LjE0MiAzNS4xODMgOS40MDYgNzMtNCA5My0zNC0xNy45MjQgMjMuOTE2LTUyLjM2NiAzOC4yOTMtODMgMzMtMzAuMTY4LTUuMjEtNTcuMTA0LTMxLjExLTY0LTYxLTcuMzQ3LTMxLjgzNS43NzktNTYgMjctODBzODAtMjYgMTA5IDljNS41MzYgNi42ODEgMTMgMTkgMTUgMzQgMSA2IDEgNyAyIDEyIDAgMiAyIDQgNCA0IDMgMCA1LjM3NC0yLjI1NiA1LTYtMy0zMC0yMS41NTYtNTcuMTkzLTQ5LTcweiIgb3BhY2l0eT0iLjQiLz4KICAgIDwvZz4KPC9zdmc+Cg==";
    disconnectedMicLoaderIconImg.style.animation = disconnectedLoaderAnimation;

    // Define base styles for mic icon in low valume state
    lowVolumeMicIconImg.style.minHeight = '100%';
    lowVolumeMicIconImg.style.height = '100%';
    lowVolumeMicIconImg.style.maxHeight = '100%';
    lowVolumeMicIconImg.style.top = '0%';
    lowVolumeMicIconImg.style.left = '0%';
    lowVolumeMicIconImg.style.zIndex = btnIconsZIndex;
    lowVolumeMicIconImg.style.position = 'absolute';
    lowVolumeMicIconImg.style.transition = transitionCss;
    lowVolumeMicIconImg.style.opacity = '0';
    lowVolumeMicIconImg.alt = alanAltText + ' low volume icon';
    lowVolumeMicIconImg.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1taWM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iQWxhbi1CdXR0b24tLy1BbmltYXRpb24tLy1idXR0b24tbm8tbWljIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuMDAwMDAwLCAxOS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMzIsMTguNDczNjg0MiBDMzIsMjUuNzE5NDczNyAyNi43OCwzMS42OTI2MzE2IDIwLDMyLjY5ODQyMTEgTDIwLDQwIEMyMCw0MS4xMDQ1Njk1IDE5LjEwNDU2OTUsNDIgMTgsNDIgQzE2Ljg5NTQzMDUsNDIgMTYsNDEuMTA0NTY5NSAxNiw0MCBMMTYsMzIuNjk4NDIxMSBDOS4yMiwzMS42OTI2MzE2IDQsMjUuNzE5NDczNyA0LDE4LjQ3MzY4NDIgTDQsMTggQzQsMTYuODk1NDMwNSA0Ljg5NTQzMDUsMTYgNiwxNiBDNy4xMDQ1Njk1LDE2IDgsMTYuODk1NDMwNSA4LDE4IEw4LDE4LjQ3MzY4NDIgQzgsMjQuMTQxODY5OCAxMi40NzcxNTI1LDI4LjczNjg0MjEgMTgsMjguNzM2ODQyMSBDMjMuNTIyODQ3NSwyOC43MzY4NDIxIDI4LDI0LjE0MTg2OTggMjgsMTguNDczNjg0MiBMMjgsMTggQzI4LDE2Ljg5NTQzMDUgMjguODk1NDMwNSwxNiAzMCwxNiBDMzEuMTA0NTY5NSwxNiAzMiwxNi44OTU0MzA1IDMyLDE4IEwzMiwxOC40NzM2ODQyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjgiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LC00LjUyNzM3MjYzZS0xNCBDMjEuMzEzNzA4NSwtNC42MTg1Mjc3OGUtMTQgMjQsMi43NTY5ODMzOCAyNCw2LjE1Nzg5NDc0IEwyNCwxOC40NzM2ODQyIEMyNCwyMS44NzQ1OTU2IDIxLjMxMzcwODUsMjQuNjMxNTc4OSAxOCwyNC42MzE1Nzg5IEMxNC42ODYyOTE1LDI0LjYzMTU3ODkgMTIsMjEuODc0NTk1NiAxMiwxOC40NzM2ODQyIEwxMiw2LjE1Nzg5NDc0IEMxMiwyLjc1Njk4MzM4IDE0LjY4NjI5MTUsLTQuNTI3MzcyNjNlLTE0IDE4LC00LjYxODUyNzc4ZS0xNCBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC42Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLjgxLDMuMjcgTDM0LjczLDM0LjE5IEMzNS40MzE0MDE2LDM0Ljg5MTQwMTYgMzUuNDMxNDAxNiwzNi4wMjg1OTg0IDM0LjczLDM2LjczIEMzNC4wMjg1OTg0LDM3LjQzMTQwMTYgMzIuODkxNDAxNiwzNy40MzE0MDE2IDMyLjE5LDM2LjczIEwxLjI3LDUuODEgQzAuNTY4NTk4MzY4LDUuMTA4NTk4MzcgMC41Njg1OTgzNjgsMy45NzE0MDE2MyAxLjI3LDMuMjcgQzEuOTcxNDAxNjMsMi41Njg1OTgzNyAzLjEwODU5ODM3LDIuNTY4NTk4MzcgMy44MSwzLjI3IFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\n";

    // Define base styles for noVoiceSupport icon in low valume state
    noVoiceSupportMicIconImg.style.minHeight = '100%';
    noVoiceSupportMicIconImg.style.height = '100%';
    noVoiceSupportMicIconImg.style.maxHeight = '100%';
    noVoiceSupportMicIconImg.style.top = '0%';
    noVoiceSupportMicIconImg.style.left = '0%';
    noVoiceSupportMicIconImg.style.zIndex = btnIconsZIndex;
    noVoiceSupportMicIconImg.style.position = 'absolute';
    noVoiceSupportMicIconImg.style.transition = transitionCss;
    noVoiceSupportMicIconImg.style.opacity = '0';
    noVoiceSupportMicIconImg.alt = alanAltText + ' no voice support icon';
    noVoiceSupportMicIconImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgB7dvxUYMwFAbwpxMwAhvoBtVJygZ1A92gI1Qn6AjoBO0GsEG7wfPlgCtNA7xASzX5fnf5oyThLp+BQDiJAAAAAAAAAAAAAAAAxmHmDyk5n+ykLAn6SUhpHVaXwrQhcBsIr5FTLGSwb1IOmpkj9RnrxXE5+1x+fH7Pwyw0+PKSLLpCrGeq1oFiwNWiUGhCZE8UC22I7IliogmRPVFshkJkTxSjvhDZE8WqJ0QEqNURIgL0MTVEgmkhElTGhkix4WqzoNlYWFp1k1fhvvMHgc9n2cFRPzXAou/8t/JAM7EH/SD66ocM9bfrb+WR7kTGm1iHjqR3HDjXbOYMsLR+p9bvPentr3iuSeYM0B7Uwvr9RXqfA+cqKTRyma2sdSB3tMlZJ7X62Ru3Qa7CiSOIF6uN9pmw4NMuTjYUcDAcM8wEkTjaZdasytm9AfHsOL6lUJkZx5c2yr7a2ZlSyGSAa8egt5qBK0JU/TH+Na7uha4QzLHBm7+0ee8Iz/Sf/XlwtjeRtnq2mVU4dVSXUr6l/NDpccS0e5KSSekKybR9lReQkmLAV9hU7ZiFKcWCq8t5zeOtWfndOWhczcYN6+VSFq2+RfQhGnUYWUeY5ph5m0k6+iHENjs9RXuE2OYbYN3HFeKOYjQmwLrfRYgUo7EB1n2bEM03khXd0F0epDXs0Obaovd1ty39UCDAif5ygO0PRyWBH64eqJuFAP9kAwAAAAAAAAAAAAAAU/wC52820szaQtwAAAAASUVORK5CYII=";
    
    // Define base styles for ovals
    var defaultBtnColorOptions = {
        "idle": {
            "background": {
                "color": [
                    'rgb(34, 203, 255)',
                    'rgb(25, 149, 255)'
                ]
            },
            "hover": {
                "color": [
                    'rgba(0, 70, 255, 0.95)',
                    'rgba(0, 156,  255, 0.95)'
                ]
            }
        },
        "listen": {
            "background": {
                "color": [
                    'rgba(0, 70, 255, 0.95)',
                    'rgba(0, 156,  255, 0.95)'
                ]
            },
            "hover": {
                "color": ['rgba(0, 70, 255, 0.95)',
                    'rgb(0, 70, 255)']
            },
        },
        "process": {
            "background": {
                "color": [
                    'rgba(0, 255, 205, 0.95)',
                    'rgba(0, 115, 255, 0.95)'
                ]

            },
            "hover": {
                "color": [
                    'rgb(0, 115, 255)',
                    'rgba(0, 115, 255, 0.95)'
                ]
            }
        },

        "reply": {
            "background": {
                "color": [
                    'rgba(122, 40, 255, 0.95)',
                    'rgba(61, 122, 255, 0.95)'
                ]
            },
            "hover": {
                "color": [
                    'rgba(122, 40, 255, 0.95)',
                    'rgb(122, 40, 255)'
                ]
            },
        }
    };

    btnOval1.style.transform = 'rotate(-315deg)';
    btnOval2.style.transform = 'rotate(-45deg)';

    applySizeSettingsToBlurLayers([ btnOval1, btnOval2 ]);

    function applySizeSettingsToBlurLayers(elements) {
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            el.style.height = btnSize / 2 + 'px';
            el.style.maxHeight = btnSize / 2 + 'px';
            el.style.minHeight = btnSize / 2 + 'px';
            el.style.minWidth = btnSize + 'px';
            el.style.width = btnSize + 'px';
            el.style.maxWidth = btnSize + 'px';
            el.style.top = 'calc(100%/2 - ' + btnSize / 2 / 2 + 'px)';
            el.style.filter = 'blur(' + btnSize / 10 + 'px)';
            el.style.left = 0;
            el.style.zIndex = btnBgLayerZIndex;
            el.style.position = 'absolute';
            el.style.transition = transitionCss;
            el.style.opacity = '.5';
            el.style.borderRadius = '100px';
            el.classList.add('alanBtn-oval-bg-default');
        }
    }

    // Define base styles for mic icon in offline state
    offlineIconImg.style.minHeight = '100%';
    offlineIconImg.style.height = '100%';
    offlineIconImg.style.maxHeight = '100%';
    offlineIconImg.style.top = '0%';
    offlineIconImg.style.left = '0%';
    offlineIconImg.style.zIndex = btnIconsZIndex;
    offlineIconImg.style.position = 'absolute';
    offlineIconImg.style.transition = transitionCss;
    offlineIconImg.style.opacity = '0';
    offlineIconImg.alt = alanAltText + ' offline icon';
    offlineIconImg.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1uZXR3b3JrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLW5vLW5ldHdvcmsiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMS4wMDAwMDAsIDIyLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzMsMiBDMzQuNjU2ODU0MiwyIDM2LDMuMzQzMTQ1NzUgMzYsNSBMMzYsMjkgQzM2LDMwLjY1Njg1NDIgMzQuNjU2ODU0MiwzMiAzMywzMiBDMzEuMzQzMTQ1OCwzMiAzMCwzMC42NTY4NTQyIDMwLDI5IEwzMCw1IEMzMCwzLjM0MzE0NTc1IDMxLjM0MzE0NTgsMiAzMywyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIzLDggQzI0LjY1Njg1NDIsOCAyNiw5LjM0MzE0NTc1IDI2LDExIEwyNiwyOSBDMjYsMzAuNjU2ODU0MiAyNC42NTY4NTQyLDMyIDIzLDMyIEMyMS4zNDMxNDU4LDMyIDIwLDMwLjY1Njg1NDIgMjAsMjkgTDIwLDExIEMyMCw5LjM0MzE0NTc1IDIxLjM0MzE0NTgsOCAyMyw4IFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEzLDE2IEMxNC42NTY4NTQyLDE2IDE2LDE3LjM0MzE0NTggMTYsMTkgTDE2LDI5IEMxNiwzMC42NTY4NTQyIDE0LjY1Njg1NDIsMzIgMTMsMzIgQzExLjM0MzE0NTgsMzIgMTAsMzAuNjU2ODU0MiAxMCwyOSBMMTAsMTkgQzEwLDE3LjM0MzE0NTggMTEuMzQzMTQ1OCwxNiAxMywxNiBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC44Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDIyIEM0LjY1Njg1NDI1LDIyIDYsMjMuMzQzMTQ1OCA2LDI1IEw2LDI5IEM2LDMwLjY1Njg1NDIgNC42NTY4NTQyNSwzMiAzLDMyIEMxLjM0MzE0NTc1LDMyIDIuMDI5MDYxMjVlLTE2LDMwLjY1Njg1NDIgMCwyOSBMMCwyNSBDLTIuMDI5MDYxMjVlLTE2LDIzLjM0MzE0NTggMS4zNDMxNDU3NSwyMiAzLDIyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNS44MSwxLjI3IEwzNi43MywzMi4xOSBDMzcuNDMxNDAxNiwzMi44OTE0MDE2IDM3LjQzMTQwMTYsMzQuMDI4NTk4NCAzNi43MywzNC43MyBDMzYuMDI4NTk4NCwzNS40MzE0MDE2IDM0Ljg5MTQwMTYsMzUuNDMxNDAxNiAzNC4xOSwzNC43MyBMMy4yNywzLjgxIEMyLjU2ODU5ODM3LDMuMTA4NTk4MzcgMi41Njg1OTgzNywxLjk3MTQwMTYzIDMuMjcsMS4yNyBDMy45NzE0MDE2MywwLjU2ODU5ODM2OCA1LjEwODU5ODM3LDAuNTY4NTk4MzY4IDUuODEsMS4yNyBaIiBpZD0iUGF0aCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\n";

    var popupCloseIconImgBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzczNDUgNy4wMDAwM0wxMy44Mzk4IDAuOTMzNjA0QzE0LjA1MzQgMC43MjAwMjIgMTQuMDUzNCAwLjM3Mzc0MSAxMy44Mzk4IDAuMTYwMTg2QzEzLjYyNjMgLTAuMDUzMzY4MSAxMy4yOCAtMC4wNTMzOTU1IDEzLjA2NjQgMC4xNjAxODZMNyA2LjIyNjYxTDAuOTMzNjA0IDAuMTYwMTg2QzAuNzIwMDIyIC0wLjA1MzM5NTUgMC4zNzM3NDEgLTAuMDUzMzk1NSAwLjE2MDE4NiAwLjE2MDE4NkMtMC4wNTMzNjgxIDAuMzczNzY4IC0wLjA1MzM5NTUgMC43MjAwNDkgMC4xNjAxODYgMC45MzM2MDRMNi4yMjY1OSA3TDAuMTYwMTg2IDEzLjA2NjRDLTAuMDUzMzk1NSAxMy4yOCAtMC4wNTMzOTU1IDEzLjYyNjMgMC4xNjAxODYgMTMuODM5OEMwLjI2Njk2NCAxMy45NDY2IDAuNDA2OTM2IDE0IDAuNTQ2OTA5IDE0QzAuNjg2ODgxIDE0IDAuODI2ODI3IDEzLjk0NjYgMC45MzM2MzEgMTMuODM5OEw3IDcuNzczNDVMMTMuMDY2NCAxMy44Mzk4QzEzLjE3MzIgMTMuOTQ2NiAxMy4zMTMyIDE0IDEzLjQ1MzEgMTRDMTMuNTkzMSAxNCAxMy43MzMgMTMuOTQ2NiAxMy44Mzk4IDEzLjgzOThDMTQuMDUzNCAxMy42MjYzIDE0LjA1MzQgMTMuMjggMTMuODM5OCAxMy4wNjY0TDcuNzczNDUgNy4wMDAwM1oiIGZpbGw9IiNCQkNGRTciLz4KPC9zdmc+Cg==";

    btnBgDefault.classList.add('alanBtn-bg-default');
    btnBgListening.classList.add('alanBtn-bg-listening');
    btnBgSpeaking.classList.add('alanBtn-bg-speaking');
    btnBgIntermediate.classList.add('alanBtn-bg-intermediate');
    btnBgUnderstood.classList.add('alanBtn-bg-understood');

    applyBgStyles(btnBgDefault);
    applyBgStyles(btnBgListening);
    applyBgStyles(btnBgSpeaking);
    applyBgStyles(btnBgIntermediate);
    applyBgStyles(btnBgUnderstood);

    var onOpacity = 1;
    var offOpacity = 0;


    btnBgDefault.style.opacity = onOpacity;

    var allIcons = [
        circleIconDiv,
        roundedTriangleIconDiv,
        micIconDiv,
        offlineIconImg,
        lowVolumeMicIconImg,
        noVoiceSupportMicIconImg,
        logoState1,
        logoState2,
        logoState3,
        logoState4,
        logoState5,
        logoState6,
        logoState7,
        logoState8,
        logoState9,
        logoState10,
    ];

    for (i = 0; i < allIcons.length; i++) {
        allIcons[i].setAttribute('draggable', 'false');
    }

    hideLayers([
        btnBgListening,
        btnBgSpeaking,
        btnBgIntermediate,
        btnBgUnderstood,
    ]);

    btn.appendChild(btnOval1);
    btn.appendChild(btnOval2);
    btn.appendChild(btnBgDefault);
    btn.appendChild(btnBgListening);
    btn.appendChild(btnBgSpeaking);
    btn.appendChild(btnBgIntermediate);
    btn.appendChild(btnBgUnderstood);
    btn.appendChild(micIconDiv);
    btn.appendChild(roundedTriangleIconDiv);
    btn.appendChild(circleIconDiv);
    btn.appendChild(disconnectedMicLoaderIconImg);
    btn.appendChild(lowVolumeMicIconImg);
    btn.appendChild(noVoiceSupportMicIconImg);
    btn.appendChild(offlineIconImg);
    btn.classList.add("alanBtn");

    if(isMobile()){
        rootEl.classList.add("mobile");
    }

    //#endregion

    //#region Add needed styles to the page
    createAlanStyleSheet();

    function getStyleSheetMarker(andFlag) {
        return '.alan-' + getProjectId() + (andFlag ? '' : ' ');
    }

    function createAlanStyleSheet(btnOptions) {
        var style;
        var keyFrames = '';
        var projectId = getProjectId();

        var existingStyleSheet;

        if (options.shadowDOM) {
            existingStyleSheet = options.shadowDOM.getElementById('alan-stylesheet-' + projectId);
        } else {
            existingStyleSheet = document.getElementById('alan-stylesheet-' + projectId);
        }

        if (existingStyleSheet) {
            existingStyleSheet.disabled = true;
            existingStyleSheet.parentNode.removeChild(existingStyleSheet);
        }

        style = document.createElement('style');
        style.setAttribute('id', 'alan-stylesheet-' + projectId);
        style.type = 'text/css';

        keyFrames += '.alanBtn-root * {  box-sizing: border-box; font-family: Helvetica, Arial, sans-serif; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}';
        
        var hoverSelector = !isMobile() ? ':hover' : ':active';
        
        if (!isMobile()) {
            keyFrames += getStyleSheetMarker() + '.alanBtn{transform: scale(1);'+ transitionCss +';} .alanBtn' + hoverSelector + '{transform: scale(1.11111);transition:' + transitionCss + ';}.alanBtn:focus {transform: scale(1);' + transitionCss + ';  border: solid 3px #50e3c2;  outline: none;  }';
        }
        
        keyFrames += getStyleSheetMarker() + '.alanBtn-recognised-text-holder { position:fixed; transform: translateY(' + (isTopAligned ? '-' : '') +'50%); max-width:236px; font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px;  min-height: 40px;  color: #000; font-weight: normal; background-color: #fff; border-radius:10px; box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.35); display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack: activate;-ms-flex-pack: start;justify-content: start;}';
        
        keyFrames += getStyleSheetMarker() + ' .alanBtn-recognised-text-holder.with-text.left-side { text-align: left;}';
        keyFrames += getStyleSheetMarker() + ' .alanBtn-recognised-text-holder.with-text.right-side { text-align: right;}';

        keyFrames += getStyleSheetMarker() + ' .alanBtn-recognised-text-holder .alanBtn-recognised-text-content:not(:empty) {padding: 10px;}';
        
        keyFrames += getStyleSheetMarker(true) + '.alanBtn-recognised-text-holder-long  { font-size: 12px!important;line-height: 1.4!important;}  ';
        keyFrames += getStyleSheetMarker(true) + '.alanBtn-recognised-text-holder-super-long  { font-size: 11px!important;line-height: 1.4!important;}  ';

        keyFrames += getStyleSheetMarker() + '.alanBtn-text-appearing {  animation: text-holder-appear 800ms ease-in-out forwards;  }';
        keyFrames += getStyleSheetMarker() + '.alanBtn-text-disappearing {  animation: text-holder-disappear 800ms ease-in-out forwards;    }';
        keyFrames += getStyleSheetMarker() + '.alanBtn-text-disappearing-immediately {  animation: none; opactity: 0;   }';

        keyFrames += getStyleSheetMarker() + '.alan-btn-disabled {  pointer-events: none;  opacity: .5;  transition: all .2s ease-in-out;  }';
        keyFrames += getStyleSheetMarker() + '.shadow-appear {  opacity: 1 !important;  }\n';
        keyFrames += getStyleSheetMarker() + '.shadow-disappear {  opacity: 0 !important;  transition: all .1s linear !important;  }';

        keyFrames += getStyleSheetMarker(true) + '.alan-btn-offline .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}';
        keyFrames += getStyleSheetMarker(true) + '.alan-btn-offline .alanBtn' + hoverSelector + ' .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}';

        keyFrames += getStyleSheetMarker(true) + '.alan-btn-no-voice-support .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}';
        keyFrames += getStyleSheetMarker(true) + '.alan-btn-no-voice-support .alanBtn' + hoverSelector + ' .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}';

        keyFrames += getStyleSheetMarker(true) + '.alan-btn-permission-denied .alanBtn .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}';
        keyFrames += getStyleSheetMarker(true) + '.alan-btn-permission-denied .alanBtn' + hoverSelector + ' .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}';

        keyFrames += getStyleSheetMarker() + '.triangleMicIconBg {background-image:url(' + roundedTriangleSecondLayerSrc + '); pointer-events: none;}';
        keyFrames += getStyleSheetMarker() + '.circleMicIconBg {background-image:url(' + circleSecondLayerSrc + '); pointer-events: none;}';
        keyFrames += getStyleSheetMarker() + ' img {pointer-events: none;}';
        keyFrames += getStyleSheetMarker() + '' + hoverSelector + ' .triangleMicIconBg-default {opacity:0!important;}';
        
        keyFrames += getStyleSheetMarker() + '.alan-overlay-for-alert {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99;background: rgba(0, 0, 0, 0.57);opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}';
        keyFrames += getStyleSheetMarker() + '.alan-alert-popup {border-radius:10px; box-shadow: 0px 5px 14px rgba(3, 3, 3, 0.25);padding:12px;padding-right:24px;text-align: center;width: 220px;background: rgb(255 255 255);position: fixed;left: 50%;transform: translateX(-50%);top: 10%;    color: #000;font-size: 14px;line-height: 18px;}';
        keyFrames += getStyleSheetMarker() + '.alan-alert-popup__close-btn {background:url("' + popupCloseIconImgBase64 + '") no-repeat center;cursor:pointer; background-size:100% 100%;position: absolute;top: 12px;right: 12px;width: 14px;height: 14px;}';
        
        keyFrames += getStyleSheetMarker() + '.alan-overlay {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99;background: rgba(0, 0, 0, 0.57);opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}';
        keyFrames += getStyleSheetMarker() + '.alan-overlay-popup.default-popup {border-radius:10px; box-shadow: 0px 5px 14px rgba(3, 3, 3, 0.25);padding:6px 30px 6px 12px;text-align: left;width: 220px;background: rgb(255 255 255);}';
        keyFrames += getStyleSheetMarker() + '.alan-overlay-popup.top.right {border-top-right-radius: 0!important;}';
        keyFrames += getStyleSheetMarker() + '.alan-overlay-popup.top.left {border-top-left-radius: 0!important;}';
        keyFrames += getStyleSheetMarker() + '.alan-overlay-popup.bottom.left {border-bottom-left-radius: 0!important;}';
        keyFrames += getStyleSheetMarker() + '.alan-overlay-popup.bottom.right {border-bottom-right-radius: 0!important;}';
        keyFrames += getStyleSheetMarker() + '.alan-overlay-popup {position: fixed;opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}';
        keyFrames += getStyleSheetMarker() + '.alan-overlay-popup__body {position:relative;color: #0D1940;font-size: 16px;line-height: 20px;}';
        keyFrames += getStyleSheetMarker() + '.alan-overlay-popup__ok {background:url("' + popupCloseIconImgBase64 + '") no-repeat center; background-size:100% 100%;min-height:14px;height:14px;max-height:14px;min-width:14px;width:14px;max-width:14px;opacity:0;transition:opacity 300ms ease-in-out;position:absolute;top:8px;right:8px;cursor: pointer;pointer-events: auto!important;}';
        keyFrames += getStyleSheetMarker() + '.alan-overlay-popup__ok:hover {opacity:0.9}';
        keyFrames += getStyleSheetMarker() + '.alan-overlay-popup:hover .alan-overlay-popup__ok{opacity:1;transition:opacity 300ms ease-in-out;}';
        
        keyFrames += getStyleSheetMarker() + generateKeyFrame('alan-gradient', '0%{backgroundPosition: 0 0;}50%{backgroundPosition: -100% 0;}100%{backgroundPosition: 0 0;}');
        keyFrames += getStyleSheetMarker() + generateKeyFrame('alan-pulsating', '0%{transform: scale(1.11111);}50%{transform: scale(1.0);}100%{transform: scale(1.11111);}');
        keyFrames += getStyleSheetMarker() + generateKeyFrame('alan-mic-pulsating', '0%{transform: scale(0.91);}50%{transform: scale(1.0);}100%{transform: scale(0.91);}');
        keyFrames += getStyleSheetMarker() + generateKeyFrame('alan-triangle-mic-pulsating', '0%{transform: scale(0.94);}50%{transform: scale(1.0);}100%{transform: scale(0.94);}');
        keyFrames += getStyleSheetMarker() + generateKeyFrame('alan-fade-in', '0%{opacity: 0;}100%{opacity:1;}');
        keyFrames += getStyleSheetMarker() + generateKeyFrame('alan-fade-out', '0%{opacity: 1;}100%{opacity:0;}');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('text-holder-appear',
            '0%{' +
            'opacity:0; ' +
            'color:transparent; ' +
            'background-color:rgba(245, 252, 252, 0.0);' +
            'border: solid 1px transparent; ' +
            '}' +
            '100%{' +
            'opacity:1; ' +
            'color:#000;' +
            'background-color:rgba(245, 252, 252, 0.8);' +
            '}');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('text-holder-disappear',
            '0%{' +
            'opacity:1; ' +
            'color:#000;' +
            'background-color:rgba(245, 252, 252, 0.8);  ' +
            '}' +
            '100%{' +
            'opacity:0; ' +
            'color:transparent;' +
            'background-color:rgba(245, 252, 252, 0.0);' +
            'border: solid 1px transparent;' +
            '}');


        keyFrames += getStyleSheetMarker() + generateKeyFrame('logo-state-1-animation',
            '0% {  opacity: 1;  } ' +
            '10% {  opacity: 0;  } ' +
            '20% {  opacity: 0;  } ' +
            '30% {  opacity: 0;  } ' +
            '40% {  opacity: 0;  } ' +
            '50% {  opacity: 0;  } ' +
            '60% {  opacity: 0;  } ' +
            '70% {  opacity: 0;  } ' +
            '80% {  opacity: 0;  } ' +
            '90% {  opacity: 0;  } ' +
            '100% {  opacity: 1;  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('logo-state-2-animation',
            '0% {  opacity: 0;  } ' +
            '10% {  opacity: 1;  } ' +
            '20% {  opacity: 0;  } ' +
            '30% {  opacity: 0;  } ' +
            '40% {  opacity: 0;  } ' +
            '50% {  opacity: 0;  } ' +
            '60% {  opacity: 0;  } ' +
            '70% {  opacity: 0;  } ' +
            '80% {  opacity: 0;  } ' +
            '90% {  opacity: 0;  } ' +
            '100% {  opacity: 0;  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('logo-state-3-animation',
            '0% {  opacity: 0;  } ' +
            '10% {  opacity: 0;  } ' +
            '20% {  opacity: 1;  } ' +
            '30% {  opacity: 0;  } ' +
            '40% {  opacity: 0;  } ' +
            '50% {  opacity: 0;  } ' +
            '60% {  opacity: 0;  } ' +
            '70% {  opacity: 0;  } ' +
            '80% {  opacity: 0;  } ' +
            '90% {  opacity: 0;  } ' +
            '100% {  opacity: 0;  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('logo-state-4-animation',
            '0% {  opacity: 0;  } ' +
            '10% {  opacity: 0;  } ' +
            '20% {  opacity: 0;  } ' +
            '30% {  opacity: 1;  } ' +
            '40% {  opacity: 0;  } ' +
            '50% {  opacity: 0;  } ' +
            '60% {  opacity: 0;  } ' +
            '70% {  opacity: 0;  } ' +
            '80% {  opacity: 0;  } ' +
            '90% {  opacity: 0;  } ' +
            '100% {  opacity: 0;  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('logo-state-5-animation',
            '0% {  opacity: 0;  } ' +
            '10% {  opacity: 0;  } ' +
            '20% {  opacity: 0;  } ' +
            '30% {  opacity: 0;  } ' +
            '40% {  opacity: 1;  } ' +
            '50% {  opacity: 0;  } ' +
            '60% {  opacity: 0;  } ' +
            '70% {  opacity: 0;  } ' +
            '80% {  opacity: 0;  } ' +
            '90% {  opacity: 0;  } ' +
            '100% {  opacity: 0;  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('logo-state-6-animation',
            '0% {  opacity: 0;  } ' +
            '10% {  opacity: 0;  } ' +
            '20% {  opacity: 0;  } ' +
            '30% {  opacity: 0;  } ' +
            '40% {  opacity: 0;  } ' +
            '50% {  opacity: 1;  } ' +
            '60% {  opacity: 0;  } ' +
            '70% {  opacity: 0;  } ' +
            '80% {  opacity: 0;  } ' +
            '90% {  opacity: 0;  } ' +
            '100% {  opacity: 0;  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('logo-state-7-animation',
            '0% {  opacity: 0;  } ' +
            '10% {  opacity: 0;  } ' +
            '20% {  opacity: 0;  } ' +
            '30% {  opacity: 0;  } ' +
            '40% {  opacity: 0;  } ' +
            '50% {  opacity: 0;  } ' +
            '60% {  opacity: 1;  } ' +
            '70% {  opacity: 0;  } ' +
            '80% {  opacity: 0;  } ' +
            '90% {  opacity: 0;  } ' +
            '100% {  opacity: 0;  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('logo-state-8-animation',
            '0% {  opacity: 0;  } ' +
            '10% {  opacity: 0;  } ' +
            '20% {  opacity: 0;  } ' +
            '30% {  opacity: 0;  } ' +
            '40% {  opacity: 0;  } ' +
            '50% {  opacity: 0;  } ' +
            '60% {  opacity: 0;  } ' +
            '70% {  opacity: 1;  } ' +
            '80% {  opacity: 0;  } ' +
            '90% {  opacity: 0;  } ' +
            '100% {  opacity: 0;  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('logo-state-9-animation',
            '0% {  opacity: 0;  } ' +
            '10% {  opacity: 0;  } ' +
            '20% {  opacity: 0;  } ' +
            '30% {  opacity: 0;  } ' +
            '40% {  opacity: 0;  } ' +
            '50% {  opacity: 0;  } ' +
            '60% {  opacity: 0;  } ' +
            '70% {  opacity: 0;  } ' +
            '80% {  opacity: 1;  } ' +
            '90% {  opacity: 0;  } ' +
            '100% {  opacity: 0;  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('logo-state-10-animation',
            '0% {  opacity: 0;  } ' +
            '10% {  opacity: 0;  } ' +
            '20% {  opacity: 0;  } ' +
            '30% {  opacity: 0;  } ' +
            '40% {  opacity: 0;  } ' +
            '50% {  opacity: 0;  } ' +
            '60% {  opacity: 0;  } ' +
            '70% {  opacity: 0;  } ' +
            '80% {  opacity: 0;  } ' +
            '90% {  opacity: 1;  } ' +
            '100% {  opacity: 0;  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('disconnected-loader-animation', '0%{  transform: rotate(0deg);  } 100%{  transform: rotate(360deg);  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('oval1-animation', '0%{  transform: rotate(-315deg);  } 50%{  transform: rotate(-495deg);  } 100%{  transform: rotate(-315deg);  }');

        keyFrames += getStyleSheetMarker() + generateKeyFrame('oval2-animation', '0%{  transform: rotate(-45deg);  } 50%{  transform: rotate(-215deg);  } 100%{  transform: rotate(-45deg);  }');


        keyFrames += getStyleSheetMarker() + generateKeyFrame('alan-text-fade-in', '0%{  opacity: 0;  } 100%{   opacity: 1;  }');

        keyFrames += getStyleSheetMarker() + '.alanBtn-bg-default.super-hidden{opacity:0!important;display:none;}';

        var predefinedBtnColorOptions = defaultBtnColorOptions;

        if (btnOptions) {
            if (btnOptions.btnLayerOptions) { //old settings
                predefinedBtnColorOptions = defaultBtnColorOptions;
            } else {
                predefinedBtnColorOptions = btnOptions || defaultBtnColorOptions;
            }
        }

        var btnBackgroundOptionKeys = Object.keys(predefinedBtnColorOptions);
        var tempLayer;
        var stateName;
        var stateMapping = {
            idle: ['default'],
            listen: ['listening'],
            process: ['intermediate', 'understood'],
            reply: ['speaking'],
        };
        var stateNameClasses,stateNameClass;
        var states = Object.keys(stateMapping);
        for (i = 0; i < states.length; i++) {
            stateName = states[i];
            stateNameClasses = stateMapping[stateName];
            tempLayer = predefinedBtnColorOptions[stateName];
            for(var j = 0; j < stateNameClasses.length; j++){
                stateNameClass = stateNameClasses[j];
            if(tempLayer.background){
                keyFrames += getStyleSheetMarker() + '.alanBtn-bg-' + stateNameClass + ' {';
                keyFrames += 'background-image: linear-gradient(122deg,'+tempLayer.background.color[0]+','+tempLayer.background.color[1]+');';
                keyFrames += '}';
                keyFrames += getStyleSheetMarker() + '.alanBtn-oval-bg-' + stateNameClass + ' {';
                keyFrames += 'background-image: linear-gradient(122deg,'+tempLayer.background.color[0]+','+tempLayer.background.color[1]+');';
                keyFrames += '}';
            }

            if(tempLayer.hover){
                keyFrames += getStyleSheetMarker() + '.alanBtn' + hoverSelector + ' .alanBtn-bg-' + stateNameClass + ':not(.super-hidden) {';
                keyFrames += 'background-image: linear-gradient(122deg,'+tempLayer.hover.color[0]+','+tempLayer.hover.color[1]+');';
                keyFrames += '}';
                keyFrames += getStyleSheetMarker() + '.alanBtn:active .alanBtn-bg-' + stateNameClass + ':not(.super-hidden) {';
                keyFrames += 'background-image: linear-gradient(122deg,'+tempLayer.hover.color[0]+','+tempLayer.hover.color[1]+');';
                keyFrames += '}';

                keyFrames += getStyleSheetMarker() + '.alanBtn' + hoverSelector + ' .alanBtn-oval-bg-' + stateNameClass + ':not(.super-hidden) {';
                keyFrames += 'background-image: linear-gradient(122deg,'+tempLayer.hover.color[0]+','+tempLayer.hover.color[1]+');';
                keyFrames += '}';
                keyFrames += getStyleSheetMarker() + '.alanBtn:active .alanBtn-oval-bg-' + stateNameClass + ':not(.super-hidden) {';
                keyFrames += 'background-image: linear-gradient(122deg,'+tempLayer.hover.color[0]+','+tempLayer.hover.color[1]+');';
                keyFrames += '}';
            }
        }

            
        }

        style.innerHTML = keyFrames;

        if (options.shadowDOM) {
            options.shadowDOM.prepend(style);
        } else {
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }

    function generateKeyFrame(name, rule) {
        var prefixes = ['@-webkit-keyframes', '@keyframes'];
        var r = '';
        for (var i = 0; i < prefixes.length; i++) {
            r += prefixes[i] + ' ' + name + '{' + rule + '} ';
        }
        return r;
    }

    //#endregion

    //#region Connect to the project and add listeners
    if (options) {
        if (options.alanAudio) {
            alanAudio = options.alanAudio;
        }
        if (options.key) {
            currentProjectId = options.key;
            tryReadSettingsFromLocalStorage();
            switchState(getDefaultBtnState(DISCONNECTED));

            window.tutorProject = alan.project(options.key, getAuthData(options.authData), options.host, null, {
                platform: (mode === 'demo' ? 'alanplayground' : null),
                userAgent: navigator.userAgent,
                appName: window.location.hostname
            });
            window.tutorProject.on('connectStatus', onConnectStatusChange);
            window.tutorProject.on('options', onOptionsReceived);
            //window.tutorProject.on('popup', onPopup);

            // console.info('BTN: tutorProject', options.key);
        } else {
            switchState(getDefaultBtnState());
        }
    }

    function getAuthData(data) {
        var authData = data || {};
        authData.uuid = getDeviceId();
        return authData;
    }

    function getProjectId() {
        var key;
        if (options.key) {
            key = options.key;
            return key.substr(0, key.indexOf('/'));
        }

        return mode;
    }

    function debounce(func, wait) {
        var timeout;
        var delay = wait || 100;
        return function (args) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(this, args);
            }, delay);
        };
    }

    var onresizeDebounced = debounce(function (e) {
        togglePopupVisibility(true);
    }, 400);

    var windowPrevInnerHeight = window.innerHeight;
    var windowPrevOrientation = window.orientation;

    function isSafari(){
        return /apple/i.test(navigator.vendor);
    }

    window.onresize = function () {
        var innerHeightDelta = Math.abs(windowPrevInnerHeight - window.innerHeight);
        var isMobileIos = (isMobile() || isIpadOS()) && isSafari();
        var orientationWasChanged = windowPrevOrientation !== window.orientation;
        // Here we describe different cases when browser's panel on mobile are shown or hidden
        // We cannot detect it other way, so we have to use this magic constants here
        // innerHeightDelta === 50 - top brawser panel is shown in landscape mode
        // innerHeightDelta === 84 - mobile ios smart banner is shown
        // innerHeightDelta === 95 - tablet ios smart banner is shown
        // innerHeightDelta === 0 - ios smart banner is hidden

        console.info('LOGS', innerHeightDelta);

        var mobilePanelsWereShownOrHidden = isMobileIos &&
            (innerHeightDelta === 84 || innerHeightDelta === 95 || innerHeightDelta === 50 || innerHeightDelta === 0);

        windowPrevOrientation = window.orientation;
        windowPrevInnerHeight = window.innerHeight;
        if (orientationWasChanged || btnWasMoved || mobilePanelsWereShownOrHidden) {
            var rootElClientRect = rootEl.getBoundingClientRect();
            var newYPos;
            if (innerHeightDelta === 0) {
                newYPos = rootElClientRect.top + 84;
            } else {
                newYPos = rootElClientRect.top;
            }

            if (orientationWasChanged && window.orientation === 0) {//portrait
                setDefaultBtnHorizontalPosition();
            } else {
                rootEl.style.setProperty('top', correctYPos(newYPos) + 'px', 'important');
            }
        }
        togglePopupVisibility(false);
        onresizeDebounced();
    };

    function checkPerrmissions() {
        if (navigator.permissions) {
            navigator.permissions.query({ name: 'microphone' }).then(function (result) {
                if (result.state === 'prompt') {
                    if (options.showOverlayOnMicPermissionPrompt) {
                        showPopup({ overlay: true, buttonUnderOverlay: true });
                    }
                    sendClientEvent({ micPermissionPrompt: true });
                }
                if (result.state !== 'granted') {
                    sendClientEvent({ buttonClicked: true,  micAllowed: false});
                } else {
                    sendClientEvent({ buttonClicked: true,  micAllowed: true});
                }
            }).catch(function () {
                console.warn('Not possible to detect mic permissions');
                setTimeout(() => sendClientEvent({ buttonClicked: true,  micAllowed: alanAudio.isMicAllowed()}), 300);
            });
        } else {
            setTimeout(() => sendClientEvent({ buttonClicked: true,  micAllowed: alanAudio.isMicAllowed()}), 300);
        }
    }

    alanAudio.on('popup', onPopup);

    function _activateAlanButton(resolve) {
        //playSoundOn();
        checkPerrmissions();
        if (options.onBeforeMicStart) {
            options.onBeforeMicStart();
        }
        alanAudio.on('micStart', onMicStart);
        alanAudio.on('micStop', onMicStop);
        alanAudio.on('micAllowed', onMicAllowed);
        alanAudio.on('audioRunning', onAudioRunning);
        checkIfPlayAllowed();
        alanAudio.on('micFail', onMicFail);
        alanAudio.on('playStart', onPlayStart);
        alanAudio.on('playStop', onPlayStop);
        alanAudio.on('command', onCommandCbInMicBtn);
        alanAudio.start(resolve);
        if (options.onMicStarted) {
            options.onMicStarted();
        }
    }

    function activateAlanButton() {
        var activatePromise = new Promise(function (resolve, reject) {

            if (btnDisabled) {
                reject({err: BTN_IS_DISABLED_CODE});
                return;
            }

            if (isPreviewMode()) {
                reject({err: PREVIEW_MODE_CODE});
                return;
            }

            function waitForConnectionForActivateCall(res) {
                if (res === 'authorized') {
                    window.tutorProject.off('connectStatus', waitForConnectionForActivateCall);
                    _activateAlanButton(resolve);
                }
            }

            if (alanAudio) {
                switch (state) {
                    case DEFAULT:
                        try {
                            _activateAlanButton(resolve);
                        } catch (e) {
                            currentErrMsg = NO_VOICE_SUPPORT_IN_BROWSER_MSG;
                            reject({ err: NO_VOICE_SUPPORT_IN_BROWSER_CODE });
                        }
                        break;
                    case DISCONNECTED:
                    case OFFLINE:
                        window.tutorProject.on('connectStatus', waitForConnectionForActivateCall);
                        break;
                    case PERMISSION_DENIED:
                        reject({ err: MIC_BLOCKED_CODE });
                        sendClientEvent({ buttonClicked: true,  micAllowed: false});
                        break;
                    case LISTENING:
                    case SPEAKING:
                    case INTERMEDIATE:
                    case UNDERSTOOD:
                        resolve();
                        sendClientEvent({ buttonClicked: true,  micAllowed: true});
                        break;
                    default:
                }
            } else {
                reject({ err: NO_ALAN_AUDIO_INSANCE_WAS_PROVIDED_CODE });
            }
        });

        return activatePromise;
    }

    function checkIfPlayAllowed() {
        if (alanAudio.isAudioRunning()) {
            sendClientEvent({ playAllowed: true });
        }
    }

    function onPopup(p) {
        hidePopup();
        if (isMobile() || isTutorMode()) {
            return;
        }
        if (p) {
            showPopup(p.popup ? p.popup : p);
        }
    }

    function showPopup(popupOptions) {
        if (btnDisabled) return;
        savedPopupOptions = popupOptions;
        var message = popupOptions.message;
        var buttonMarginInPopup = popupOptions.buttonMarginInPopup;
        var withOverlay = popupOptions.overlay;
        var _btnSize = parseInt(btnSize, 10);
        var overlay = document.createElement('div');
        var popup = document.createElement('div');
        var rootElClientRect = rootEl.getBoundingClientRect();
        var maxZIndex = 2147483647;
        var popup2BtnMargin = 12;

        popupIsVisible = true;

        overlay.id = 'alan-overlay';
        popup.id = 'alan-overlay-popup';
        overlay.classList.add('alan-overlay');
        popup.classList.add('alan-overlay-popup');

        if (popupOptions.buttonUnderOverlay !== true) {
            btn.style.zIndex = maxZIndex;
        }
        
        overlay.style.zIndex = maxZIndex - 3;
        popup.style.zIndex = maxZIndex - 2;

        if (popupOptions.preventClick) {
            btn.style.pointerEvents = 'none';
        }

        if (popupOptions.style) {
            var popupStyle = document.createElement('style');
            popupStyle.setAttribute('id', 'alan-stylesheet-popup');
            popupStyle.type = 'text/css';
            const parentClass = 'alan-popup-' + guid();
            popup.classList.add(parentClass);
            popupStyle.innerHTML = popupOptions.style.replace(/(\.-?[_a-zA-Z]+[_a-zA-Z0-9-:]*\s*\{)/gi, `.${parentClass} $&`);

            if (options.shadowDOM) {
                options.shadowDOM.prepend(popupStyle);
            } else {
                document.getElementsByTagName('head')[0].appendChild(popupStyle);
            }
        }

        popup.classList.add(isLeftAligned ? 'left' : 'right');

        if (!absolutePosition) {
            if (!isLeftAligned) {
                popup.style.right = initRightPos + (-buttonMarginInPopup || 0) + 'px';
            } else {
                popup.style.left = rootElClientRect.x + (-buttonMarginInPopup || 0) + 'px';
            }

            if (rootElClientRect.top > 80) {
                popup.classList.add('bottom');
                popup.style.top = rootElClientRect.top + (buttonMarginInPopup ? (_btnSize + buttonMarginInPopup) : (-popup2BtnMargin)) + 'px';
                popup.style.setProperty('transform', 'translateY(-100%)', 'important');
            } else {
                popup.classList.add('top');
                popup.style.top = rootElClientRect.top + (buttonMarginInPopup ? (-buttonMarginInPopup) : (_btnSize + popup2BtnMargin)) + 'px';
            }
        } else {
            popup.style.position = 'absolute';
            popup.style[isLeftAligned ? 'left' : 'right'] = (-buttonMarginInPopup || 0) + 'px';
            popup.style[isTopAligned ? 'top' : 'bottom'] = (buttonMarginInPopup ? -buttonMarginInPopup : (_btnSize + popup2BtnMargin)) + 'px';
            popup.classList.add(isTopAligned ? 'top' : 'bottom');
        }

        if (!popupOptions.html) {
            if (message) {
                popup.classList.add('default-popup');
                popup.innerHTML = '<div class="alan-overlay-popup__body">' + message + '</div>';
            }
        } else {
            popup.innerHTML = popupOptions.html;
        }

        var closeIconImg = document.createElement('div');
        closeIconImg.id = 'alan-overlay-ok-btn';
        closeIconImg.classList.add('alan-overlay-popup__ok');
        if (popupOptions.html && popup.children[0]) {
            popup.children[0].appendChild(closeIconImg);
        } else {
            popup.appendChild(closeIconImg);
        }

        rootEl.appendChild(popup);
        if (withOverlay) {
            rootEl.appendChild(overlay);
        }
        closeIconImg.addEventListener('click', hidePopupByCloseIcon);
        overlay.addEventListener('click', hidePopup);
        document.addEventListener('keyup', hidePopupByEsc);
        let showPopupEvent = "showPopup";
        if (popupOptions.name) {
            showPopupEvent += ":" + popupOptions.name;
        }
        sendUserEvent(showPopupEvent);
    }

    function hidePopupByCloseIcon() {
        hidePopup();
        sendClientEvent({popupCloseClicked: true});
    }

    function hidePopupByEsc(e) {
        if (e.keyCode === 27) {
            hidePopup();
            sendClientEvent({popupCloseClicked: true});
        }
    }

    function hidePopup(keepOptionsInMemory) {
        if (keepOptionsInMemory !== true) {
            savedPopupOptions = null;
        }
        var overlay = rootEl.querySelector('#alan-overlay');
        var popup = rootEl.querySelector('#alan-overlay-popup');
        if (!popup) return;
        var overlayCloseIcon = rootEl.querySelector('#alan-overlay-ok-btn');
        if (overlayCloseIcon) {
            overlayCloseIcon.removeEventListener('click', hidePopup);
        }
        if (overlay) {
            overlay.remove();
            overlay.removeEventListener('click', hidePopup);
        }
        if (popup) {
            popup.remove();
        }
        document.removeEventListener('keyup', hidePopupByEsc);
        btn.style.zIndex = btnZIndex;
        btn.style.pointerEvents = 'auto';
        popupIsVisible = false;
    }

    var savedPopupOptions;

    function togglePopupVisibility(isVisible) {
        var popup = rootEl.querySelector('#alan-overlay-popup');
        if (popup) {
            popup.style.visibility = isVisible ? 'visible' : 'hidden';
            if (isVisible) {
                hidePopup(true);
                if (savedPopupOptions) {
                    showPopup(savedPopupOptions);
                }
            }
        }
    }

    btn.addEventListener('click', function (e) {
        if (afterMouseMove) return;
        if (!dndBackAnimFinished) return;
        hidePopup();
        if (!firstClick) {
            firstClick = true;
            sendClientEvent({ firstClick: true });
        }
        if (currentErrMsg) {
            if (currentErrMsg === MIC_BLOCKED_MSG) {
                sendClientEvent({ buttonClicked: true,  micAllowed: false});
                showAlert(currentErrMsg);
            } else {
                showAlert(currentErrMsg);
            }
            return;
        }
        if (alanAudio) {
            if (state === 'default') {
                coldPlayForSoundNext();
                activateAlanButton();
            } else {
                alanAudio.stop();
            }
        } else {
            throw new Error('No alan audio instance was provided');
        }
        //remove focus state from the btn after click
        this.blur();
    });

    function showRecognisedText(e) {
        var recognisedText = '';

        if (hideS2TPanel || dndIsDown) {
            return;
        }

        recognisedTextVisible = true;
        if (!options.hideRecognizedText) {
            if (recognisedTextHolder.classList.value.indexOf('alanBtn-text-appearing') === -1) {
                recognisedTextHolder.style.opacity = 1;
                recognisedTextHolder.classList.add('with-text');
                recognisedTextHolder.classList.add('alanBtn-text-appearing');
                recognisedTextHolder.classList.remove('alanBtn-text-disappearing');
            }

            if (e.text) {
                recognisedText = e.text;
                if (recognisedText.length > 200) {
                    recognisedText = recognisedText.substr(0, 200);
                }
                recognisedTextContent.innerHTML = recognisedText;
            }

            if (recognisedText.length > 60 && recognisedText.length <= 80) {
                recognisedTextHolder.classList.add('alanBtn-recognised-text-holder-long');
            } else if (recognisedText.length > 80) {
                recognisedTextHolder.classList.add('alanBtn-recognised-text-holder-super-long');
            } else {
                recognisedTextHolder.classList.remove('alanBtn-recognised-text-holder-long');
                recognisedTextHolder.classList.remove('alanBtn-recognised-text-holder-super-long');
            }
           
            replaceRecognisedText(recognisedText);
        }
    }
    
    function replaceRecognisedText(recognisedText) {
        if (isMobile()) {
            return;
        }
        if (!options.hideRecognizedText) {
            recognisedTextContent.innerText = recognisedText;
        }
    }

    function hideRecognisedText(delay, noAnimation) {
        if (!options.hideRecognizedText && recognisedTextVisible) {
            if (noAnimation === true) {
                recognisedTextHolder.style.opacity = 0;
                recognisedTextHolder.classList.remove('alanBtn-text-appearing');
                recognisedTextVisible = false;
                return;
            } else {
                recognisedTextHolder.classList.add('alanBtn-text-disappearing');
                recognisedTextHolder.classList.remove('alanBtn-text-appearing');
            }

            recognisedTextVisible = false;

            setTimeout(function () {
                recognisedTextContent.innerHTML = '';
                recognisedTextHolder.classList.remove('alanBtn-recognised-text-holder-long');
                recognisedTextHolder.classList.remove('alanBtn-recognised-text-holder-super-long');
                recognisedTextHolder.classList.remove('with-text');
            }, delay || 810);
        }
    }

    function onOptionsReceived(data) {
        if (data && data.web) {
            keepButtonPositionAfterDnD = data.web.keepButtonPositionAfterDnD;
            if (!keepButtonPositionAfterDnD) {
                clearSavedBtnPosition();
            }
            setButtonPosition(data.web.keepButtonPositionAfterDnD);
        } else {
            setButtonPosition();
        }

        if (data && data.web && data.web.hideS2TPanel === true) {
            hideSpeach2TextPanel();
        } else {
            showSpeach2TextPanel();
        }

        if (data && data.web && data.web.timeout !== undefined ) {
            turnOffTimeout = data.web.timeout;
            setTurnOffVoiceTimeout();
        }

        if (data && data.web) {
            applyBtnOptions(data.web.btnOptions);
        }

        console.info('OPTIONS', data.web);
        applyLogoOptions(data);

        if (options.mode !== 'tutor') {
            if (data && data.web) {
                applyBtnSizeOptions(data.web.buttonSize || btnModes[mode].btnSize);
            }
        }

        if (isLocalStorageAvailable && data) {
            localStorage.setItem(getStorageKey(), JSON.stringify(data));
        }

        if (data && data.web && data.web.playReadyToListenSound !== undefined) {
            applyPlayReadyToListenSoundOptions(data.web.playReadyToListenSound);
        }

        if (data && data.web && data.web.hidden === true) {
            hideAlanBtn();
        } else {
            // sendClientEvent({ buttonReady: true });
            showAlanBtn();
        }
    }

    function onConnectStatusChange(res) {
        console.info('BTN: connectStatus', res);

        if (options.onConnectionStatus) {
            options.onConnectionStatus(res);
        }

        if (res === 'disconnected') {
            if (previousState !== OFFLINE) {
                switchState(getDefaultBtnState(DISCONNECTED));
            }
        } else if (res === 'authorized') {
            if (previousState) {
                switchState(previousState);
            } else {
                switchState(getDefaultBtnState());
            }
        }
    }

    function onMicAllowed() {
        sendClientEvent({ micAllowed: true });
    }

    function onAudioRunning() {
        checkIfPlayAllowed();
    }

    function onMicStart() {
        // console.log('BTN: mic. started', new Date());
        if (micWasStoppedByTimeout) {
            micWasStoppedByTimeout = false;
            alanAudio.start();
            return;
        }

        hidePopup();
        switchState(LISTENING);
        playSoundNext();
        isAlanActive = true;

        if (window.tutorProject) {
            window.tutorProject.on('text', onTextCbInMicBtn);
            window.tutorProject.on('parsed', onParsedCbInMicBtn);
            window.tutorProject.on('recognized', onRecognizedCbInMicBtn);
            window.tutorProject.on('connectStatus', onConnectStatusChange);
            window.tutorProject.on('options', onOptionsReceived);
        }
    }

    function onMicStop() {
        // console.log('BTN: mic. stopped');
        playSoundOff();
        isAlanSpeaking = false;

        alanAudio.off('micStart', onMicStart);
        alanAudio.off('micStop', onMicStop);
        alanAudio.off('micAllowed', onMicAllowed);
        alanAudio.off('audioRunning', onAudioRunning);
        alanAudio.off('micFail', onMicFail);
        alanAudio.off('playStart', onPlayStart);
        alanAudio.off('playStop', onPlayStop);
        alanAudio.off('command', onCommandCbInMicBtn);
        //alanAudio.off('popup', onPopup);
        hideRecognisedText();

        switchState(DEFAULT);

        isAlanActive = false;

        if (window.tutorProject) {
            window.tutorProject.off('text', onTextCbInMicBtn);
            window.tutorProject.off('parsed', onParsedCbInMicBtn);
            window.tutorProject.off('recognized', onRecognizedCbInMicBtn);
            window.tutorProject.off('connectStatus', onConnectStatusChange);
            window.tutorProject.off('options', onOptionsReceived);
        }

        if (options.onMicStopped) {
            options.onMicStopped();
        }
    }

    function onMicFail(err) {
        // console.log('BTN: mic. failed');
        onMicStop();

        if (err) {
            hidePopup();
            if (err.name === 'NotAllowedError') {
                switchState(PERMISSION_DENIED);
                // setTimeout(function () { if(firstClick){showAlert(MIC_BLOCKED_MSG);} }, 300);
            } else if(err.name === 'SecurityError') {
                switchState(NOT_SECURE_ORIGIN);
                setTimeout(function () { showAlert(NOT_SECURE_ORIGIN_MSG); }, 300);
            } else {
                console.error(err.name + ' ' + err.message);
            }
        }
    }

    function showAlert(msg){
        var alertPopup = rootEl.querySelector('#alan-alert-popup');
        if (alertPopup) return;
        var overlay = document.createElement('div');
        alertPopup = document.createElement('div');
        var maxZIndex = 2147483647;

        overlay.id = 'alan-overlay-for-alert';
        overlay.classList.add('alan-overlay-for-alert');
        alertPopup.id = 'alan-alert-popup';
        alertPopup.classList.add('alan-alert-popup');

        btn.style.zIndex = maxZIndex;
        overlay.style.zIndex = maxZIndex - 3;
        alertPopup.style.zIndex = maxZIndex - 2;
        alertPopup.innerHTML = msg;

        var closeIconImg = document.createElement('div');
        closeIconImg.id = 'alan-alert-popup-close-btn';
        closeIconImg.classList.add('alan-alert-popup__close-btn');
        alertPopup.appendChild(closeIconImg);

        rootEl.appendChild(alertPopup);
        rootEl.appendChild(overlay);

        closeIconImg.addEventListener('click', hideAlert);
        overlay.addEventListener('click', hideAlert);
        document.addEventListener('keyup', hideAlertByEsc);
    }

    function hideAlertByEsc(e) {
        if (e.keyCode === 27) {
            hideAlert();
        }
    }

    function hideAlert() {
        var overlay = rootEl.querySelector('#alan-overlay-for-alert');
        var alertPopup = rootEl.querySelector('#alan-alert-popup');
        var overlayCloseIcon = rootEl.querySelector('#alan-alert-popup-close-btn');
        if (overlayCloseIcon) {
            overlayCloseIcon.removeEventListener('click', hidePopup);
        }
        if (overlay) {
            overlay.remove();
            overlay.removeEventListener('click', hidePopup);
        }
        if (alertPopup) {
            alertPopup.remove();
        }
        btn.style.zIndex = btnZIndex;
        btn.style.pointerEvents = 'auto';
        document.removeEventListener('keyup', hideAlertByEsc);
    }

    function onPlayStart(e) {
        console.log('BTN: play start');
        isAlanSpeaking = true;
        switchState(SPEAKING);
        turnOffVoiceFn();
    }

    function onPlayStop(e) {
        console.log('BTN: play stop');
        isAlanSpeaking = false;
        playSoundNext();
        switchState(LISTENING);
        turnOffVoiceFn();
    }

    function onTextCbInMicBtn(e) {
        // console.info('BTN: onTextCb', e, new Date());
        if (options.onEvent) {
            options.onEvent(Object.assign(e, { name: 'text' }));
        }
        turnOffVoiceFn();
    }

    function onParsedCbInMicBtn(e) {
        // console.info('BTN: onParsedCb', e, new Date());
        if (options.onEvent) {
            options.onEvent(Object.assign(e, { name: 'parsed' }));
        }
        turnOffVoiceFn();
        showRecognisedText(e);
    }

    function onRecognizedCbInMicBtn(e) {
        // console.info('BTN: onRecognizedTextCb', e, new Date());
        if (options.onEvent) {
            options.onEvent(Object.assign(e, { name: 'recognized' }));
        }

        if (e.final === true) {
            switchState(UNDERSTOOD);
        } else {
            switchState(INTERMEDIATE);
        }

        showRecognisedText(e);
        turnOffVoiceFn();
    }

    function onCommandCbInMicBtn(e) {
        // console.info('BTN: onCommandCbInMicBtn', e, new Date());
        if (options.onCommand) {
            options.onCommand(e.data);
        }
        switchState(LISTENING);
        turnOffVoiceFn();
    }

    function playSoundOn() {
        if (!soundOnAudioDoesNotExist) {
            soundOnAudio.currentTime = 0;
            soundOnAudio.play().catch(function () {
                console.log("No activation sound, because the user didn't interact with the button");
            });
        }
    }

    function playSoundOff() {
        if (!soundOffAudioDoesNotExist) {
            soundOffAudio.currentTime = 0;
            soundOffAudio.play().catch(function () {
                console.log("No deactivation sound, because the user didn't interact with the button");
            });
        }
    }

    function coldPlayForSoundNext() {
        if (!playReadyToListenSound) return;
        soundNextAudio.loop = true;
        soundNextAudio.muted = true;
        soundNextAudio.play().catch(function (err) { console.log(err); });
    }

    function playSoundNext() {
        soundNextColdPlay = false;
        if (!playReadyToListenSound) return;
        alanAudio.skipExternalSounds(true);
        if (!soundNextAudioDoesNotExist) {
            soundNextAudio.currentTime = 0;
            soundNextAudio.muted = false;
            soundNextAudio.loop = false;
            soundNextAudio.play().catch(function (err) { console.log(err); });
        }
    }

    function changeCustomLogoVisibility(visibleLogo, logosToHide) {
        if (visibleLogo && visibleLogo.src) {
            visibleLogo.style.opacity = 1;
        }

        for (var i = 0; i < logosToHide.length; i++) {
            logosToHide[i].style.opacity = 0;
        }
    }

    window.switchState = switchState;

    function switchState(newState) {

        if (options.onButtonState) {
            options.onButtonState(btnStateMapping[newState]);
        }

        console.info('BTN: state', newState);
        
        var tempLogoParts = [],
            i = 0;

        if (newState !== DISCONNECTED) {
            previousState = newState;
        }

        currentErrMsg = null;

        if (newState === DEFAULT) {
            btn.style.animation = '';
            micIconDiv.style.animation = '';
            roundedTriangleIconDiv.style.animation = '';
            btnBgDefault.classList.remove('super-hidden');
            btnBgDefault.style.opacity = onOpacity;
            btnOval1.style.animation = '';
            btnOval2.style.animation = '';
            btnOval1.style.opacity = 0;
            btnOval2.style.opacity = 0;
            changeBgColors(DEFAULT);

            micIconDiv.style.opacity = 1;
            roundedTriangleIconDiv.style.opacity = 0;

            changeCustomLogoVisibility(
                defaultStateBtnIconImg,
                [
                    listenStateBtnIconImg,
                    processStateBtnIconImg,
                    replyStateBtnIconImg
                ]
            );

            hideLayers([
                btnBgListening,
                btnBgSpeaking,
                btnBgIntermediate,
                btnBgUnderstood,
            ]);
        } else if (newState === LISTENING) {
            btn.style.animation = pulsatingAnimation;
            micIconDiv.style.animation = pulsatingMicAnimation;

            btnBgListening.classList.remove('super-hidden');
            btnBgListening.style.opacity = onOpacity;

            btnOval1.style.opacity = 1;
            btnOval2.style.opacity = 1;

            changeBgColors(LISTENING);

            micIconDiv.style.opacity = 1;

            if (!listenStateBtnIconImg.src) {
                roundedTriangleIconDiv.style.animation = pulsatingTriangleMicAnimation;
                roundedTriangleIconDiv.style.opacity = 1;
            }

            changeCustomLogoVisibility(
                listenStateBtnIconImg,
                [
                    defaultStateBtnIconImg,
                    processStateBtnIconImg,
                    replyStateBtnIconImg
                ]
            );

            hideLayers([
                btnBgSpeaking,
                btnBgIntermediate,
                btnBgUnderstood,
            ]);
        } else if (newState === SPEAKING) {
            hideRecognisedText();
            btn.style.animation = pulsatingAnimation;

            btnBgSpeaking.classList.remove('super-hidden');
            btnBgSpeaking.style.opacity = onOpacity;
            btnOval1.style.opacity = 1;
            btnOval2.style.opacity = 1;
            changeBgColors(SPEAKING);

            changeCustomLogoVisibility(
                replyStateBtnIconImg,
                [
                    defaultStateBtnIconImg,
                    listenStateBtnIconImg,
                    processStateBtnIconImg
                ]
            );

            hideLayers([
                btnBgDefault,
                btnBgListening,
                btnBgIntermediate,
                btnBgUnderstood,
            ]);
        } else if (newState === INTERMEDIATE) {
            btn.style.animation = pulsatingAnimation;

            btnBgIntermediate.classList.remove('super-hidden');
            btnBgIntermediate.style.opacity = onOpacity;
            btnOval1.style.opacity = 1;
            btnOval2.style.opacity = 1;
            changeBgColors(INTERMEDIATE);
            micIconDiv.style.opacity = 1;
            if (!processStateBtnIconImg.src) {
                console.info('roundedTriangleIconDiv.style.opacity = 1');
                roundedTriangleIconDiv.style.opacity = 1;
            }

            hideLayers([
                btnBgDefault,
                btnBgListening,
                btnBgSpeaking,
                btnBgUnderstood,

            ]);

            changeCustomLogoVisibility(
                processStateBtnIconImg,
                [
                    defaultStateBtnIconImg,
                    listenStateBtnIconImg,
                    replyStateBtnIconImg
                ]
            );

        } else if (newState === UNDERSTOOD) {
            btn.style.animation = pulsatingAnimation;

            btnBgUnderstood.classList.remove('super-hidden');
            btnBgUnderstood.style.opacity = onOpacity;
            btnOval1.style.opacity = 1;
            btnOval2.style.opacity = 1;
            changeBgColors(UNDERSTOOD);

            micIconDiv.style.opacity = 1;
            if (!processStateBtnIconImg.src) {
                console.info('roundedTriangleIconDiv.style.opacity = 1');
                roundedTriangleIconDiv.style.opacity = 1;
            } else {
                roundedTriangleIconDiv.style.opacity = 0;
            }

            changeCustomLogoVisibility(
                processStateBtnIconImg,
                [
                    defaultStateBtnIconImg,
                    listenStateBtnIconImg,
                    replyStateBtnIconImg
                ]
            );

            hideLayers([
                btnBgDefault,
                btnBgListening,
                btnBgSpeaking,
                btnBgIntermediate,
            ]);
        }

        if (newState === SPEAKING) {
            roundedTriangleIconDiv.style.opacity = 0;
            roundedTriangleIconDiv.style.backgroundSize = '0% 0%';
            if (!replyStateBtnIconImg.src) {
                circleIconDiv.style.opacity = 1;
                circleIconDiv.style.backgroundSize = '100% 100%';
            }
        } else {
            circleIconDiv.style.opacity = 0;
            circleIconDiv.style.backgroundSize = '0% 0%';
            roundedTriangleIconDiv.style.backgroundSize = '100% 100%';
        }

        if (newState === DEFAULT) {
            roundedTriangleIconDiv.classList.add('triangleMicIconBg-default');
        } else {
            roundedTriangleIconDiv.classList.remove('triangleMicIconBg-default');
        }

        tempLogoParts = [
            logoState1,
            logoState2,
            logoState3,
            logoState4,
            logoState5,
            logoState6,
            logoState7,
            logoState8,
            logoState9,
            logoState10
        ];

        if ((newState === LISTENING && !listenStateBtnIconImg.src) ||
            (newState === INTERMEDIATE && !processStateBtnIconImg.src) ||
            (newState === SPEAKING && !replyStateBtnIconImg.src) ||
            (newState === UNDERSTOOD && !processStateBtnIconImg.src)) {

            if (logoState1.style.animationName === '') {
                for (i = 0; i < tempLogoParts.length; i++) {
                    if (i === 0) {
                        tempLogoParts[i].style.opacity = 1;
                    } else {
                        tempLogoParts[i].style.opacity = 0;
                    }
                    tempLogoParts[i].style.animationName = 'logo-state-' + (i + 1) + '-animation';
                }
            }
            defaultStateBtnIconImg.style.opacity = 0;
        } else {
            //defaultStateBtnIconImg.style.opacity = 1;
            for (i = 0; i < tempLogoParts.length; i++) {
                tempLogoParts[i].style.opacity = 0;
                tempLogoParts[i].style.animationName = '';
            }
        }

        if (newState === LOW_VOLUME || newState === PERMISSION_DENIED || newState === NO_VOICE_SUPPORT || newState === NOT_SECURE_ORIGIN) {
            if (newState === LOW_VOLUME) {
                rootEl.classList.add("alan-btn-low-volume");
                currentErrMsg = LOW_VOLUME_MSG;
            } else if (newState === PERMISSION_DENIED) {
                rootEl.classList.add("alan-btn-permission-denied");
                currentErrMsg = MIC_BLOCKED_MSG;
            } else if (newState === NO_VOICE_SUPPORT || newState === NOT_SECURE_ORIGIN) {
                rootEl.classList.add("alan-btn-no-voice-support");
                if (newState === NO_VOICE_SUPPORT) {
                    currentErrMsg = NO_VOICE_SUPPORT_IN_BROWSER_MSG;
                } else if (newState === NOT_SECURE_ORIGIN) {
                    currentErrMsg = NOT_SECURE_ORIGIN_MSG;
                }
            }

            if (newState === NO_VOICE_SUPPORT) {
                noVoiceSupportMicIconImg.style.opacity = 1;
                lowVolumeMicIconImg.style.opacity = 0;
            } else {
                noVoiceSupportMicIconImg.style.opacity = 0;
                lowVolumeMicIconImg.style.opacity = 1;
            }

            changeCustomLogoVisibility(
                null,
                [
                    defaultStateBtnIconImg,
                    listenStateBtnIconImg,
                    processStateBtnIconImg,
                    replyStateBtnIconImg
                ]
            );

            micIconDiv.style.opacity = 0;
            roundedTriangleIconDiv.style.opacity = 0;
            disconnectedMicLoaderIconImg.style.opacity = 0;
            offlineIconImg.style.opacity = 0;
            btnOval1.style.animation = '';
            btnOval2.style.animation = '';
            btnOval1.style.opacity = 0;
            btnOval2.style.opacity = 0;
        } else if (newState === DISCONNECTED || newState === OFFLINE ) {
            if (newState === DISCONNECTED) {
                rootEl.classList.add("alan-btn-disconnected");
            }
            if (newState === OFFLINE) {
                rootEl.classList.add("alan-btn-offline");
                currentErrMsg = OFFLINE_MSG;
            }
            roundedTriangleIconDiv.style.opacity = 0;
            lowVolumeMicIconImg.style.opacity = 0;
            btnOval1.style.animation = '';
            btnOval2.style.animation = '';
            btnOval1.style.opacity = 0;
            btnOval2.style.opacity = 0;

            changeCustomLogoVisibility(
                null,
                [
                    defaultStateBtnIconImg,
                    listenStateBtnIconImg,
                    processStateBtnIconImg,
                    replyStateBtnIconImg
                ]);

            if (newState === DISCONNECTED) {
                micIconDiv.style.opacity = 0;
                disconnectedMicLoaderIconImg.style.opacity = 1;
            } else {
                micIconDiv.style.opacity = 0;
                disconnectedMicLoaderIconImg.style.opacity = 0;
                offlineIconImg.style.opacity = 1;
            }
        } else {
            lowVolumeMicIconImg.style.opacity = 0;
            offlineIconImg.style.opacity = 0;
            disconnectedMicLoaderIconImg.style.opacity = 0;
            rootEl.classList.remove("alan-btn-low-volume");
            rootEl.classList.remove("alan-btn-permission-denied");
            rootEl.classList.remove("alan-btn-disconnected");
            rootEl.classList.remove("alan-btn-offline");
            rootEl.classList.remove("alan-btn-no-voice-support");
        }

        state = newState;
    }

    //#endregion

    //#region Helpers
    function applyBgStyles(el, backgroundImage) {
        el.style.transition = 'all 0.4s linear';
        el.style.position = 'absolute';
        el.style.top = '0px';
        el.style.left = '0px';
        el.style.width = '100%';
        el.style.height = '100%';
        el.style.borderRadius = '50%';
        el.style.zIndex = btnBgLayerZIndex;
        el.style.backgroundPosition = '0 0';
        el.style.opacity = 0;
        el.style.opacity = 0;
        el.style.transition = 'opacity 300ms ease-in-out';
        el.style.animation = gradientAnimation;
    }

    function hideLayers(layers) {
        for (var i = 0; i < layers.length; i++) {
            layers[i].style.opacity = offOpacity;
            layers[i].classList.add('super-hidden');
        }
    }

    function changeBgColors(state) {
        var tempBgLayers = [btnOval1, btnOval2];
        var newStateName = state || DEFAULT;
        var tempBgLayerClasses = [
            'alanBtn-oval-bg-' + DEFAULT,
            'alanBtn-oval-bg-' + LISTENING,
            'alanBtn-oval-bg-' + INTERMEDIATE,
            'alanBtn-oval-bg-' + UNDERSTOOD,
            'alanBtn-oval-bg-' + SPEAKING,
        ];

        for (var i = 0; i < tempBgLayers.length; i++) {
            tempBgLayers[i].classList.add('alanBtn-oval-bg-' + newStateName);
            for (var j = 0; j < tempBgLayerClasses.length; j++) {
                tempBgLayers[i].classList.remove(tempBgLayerClasses[j]);
            }
        }
    }

    function getStorageKey() {
        var key = '';
        if (options && options.key) {
            key = options.key;
        }
        return 'alan-btn-options-' + key;
    }

    function isMobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    }

    function isIpadOS() {
        return navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2 &&
            /MacIntel/.test(navigator.platform);
    }

    function isOriginSecure() {
        var isSecure = false;
        var protocol = window.location.protocol;
        var hostname = window.location.hostname;

        if (protocol === 'https:') {
            isSecure = true;
        }

        if (protocol === 'file:') {
            isSecure = true;
        }

        if (protocol === 'http:' && (hostname.indexOf('localhost') > -1 || hostname.indexOf('127.0.0.1') > -1)) {
            isSecure = true;
        }

        return isSecure;
    }

    function isAudioSupported() {
        var available = false,
            fakeGetUserMedia,
            fakeContext;

        fakeGetUserMedia = (navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia ||
            (navigator.mediaDevices && navigator.mediaDevices.getUserMedia));

        fakeContext = window.AudioContext ||
            window.webkitAudioContext ||
            window.mozAudioContext;

        if (fakeGetUserMedia && fakeContext) {
            available = true;
        }

        return available;
    }

    //#endregion

    //#region Append layers to the rootEl
    function showAlanBtn() {
        rootEl.innerHTML = '';

        recognisedTextHolder.appendChild(recognisedTextContent);

        rootEl.appendChild(recognisedTextHolder);
        rootEl.appendChild(btn);
        btnDisabled = false;
        sendClientEvent({ buttonReady: true });
    }

    function hideAlanBtn() {
        if (!isTutorMode()) {
            alanAudio.stop();
            rootEl.innerHTML = '';
            btnDisabled = true;
        }
    }

    function showSpeach2TextPanel() {
        hideS2TPanel = false;
    }

    function hideSpeach2TextPanel() {
        hideS2TPanel = true;
        hideRecognisedText();
    }

    function applyBtnOptions(btnOptions) {
        if (btnOptions) {
            createAlanStyleSheet(btnOptions);
        } else {
            createAlanStyleSheet();
        }
    }

    function applyLogoOptions(data) {
        if (data && data.web) {
            // support prev version of the Alan Btn where we can customize logo via only one prop - logoUrl
            if (data.web.logoUrl &&
                !data.web.logoIdle &&
                !data.web.logoListen &&
                !data.web.logoProcess &&
                !data.web.logoReply) {
                listenStateBtnIconImg.src = data.web.logoUrl;
                processStateBtnIconImg.src = data.web.logoUrl;
                replyStateBtnIconImg.src = data.web.logoUrl;
            } else {
                if (data.web.logoIdle) {
                    defaultStateBtnIconImg.src = data.web.logoIdle;
                } else {
                    defaultStateBtnIconImg.src = micIconSrc;
                }

                if (data.web.logoListen) {
                    listenStateBtnIconImg.src = data.web.logoListen;
                } else {
                    listenStateBtnIconImg.removeAttribute('src');
                    listenStateBtnIconImg.style.opacity = 0;
                }

                if (data.web.logoProcess) {
                    processStateBtnIconImg.src = data.web.logoProcess;
                } else {
                    processStateBtnIconImg.removeAttribute('src');
                    processStateBtnIconImg.style.opacity = 0;
                }

                if (data.web.logoReply) {
                    replyStateBtnIconImg.src = data.web.logoReply;
                } else {
                    replyStateBtnIconImg.removeAttribute('src');
                    replyStateBtnIconImg.style.opacity = 0;
                }
            }
        }
    }

    function applyPlayReadyToListenSoundOptions(playSound){
        playReadyToListenSound = playSound;
    }

    rootEl.classList.add("alanBtn-root");
    rootEl.classList.add("alan-" + getProjectId());

    var alanBtnSavedOptions = null;

    if (isTutorMode()) {
        showAlanBtn();
    } else {
        if (isLocalStorageAvailable) {
            try {
                tryReadSettingsFromLocalStorage();
            } catch (e) {
            }
        }
    }

    function tryReadSettingsFromLocalStorage() {
        if (isLocalStorageAvailable) {
            try {
                alanBtnSavedOptions = JSON.parse(localStorage.getItem(getStorageKey()));

                if (alanBtnSavedOptions && alanBtnSavedOptions.web) {

                    if (alanBtnSavedOptions.web.btnOptions) {
                        applyBtnOptions(alanBtnSavedOptions.web.btnOptions);
                    }
                }
            } catch (e) {

            }
        }
    }

    if (!options.rootEl) {
        body.appendChild(rootEl);
    }

    //#endregion

    //#region Drag-n-drop btn logic

    if (!pinned) {
        btn.addEventListener('mousedown', onMouseDown, true);
        btn.addEventListener('touchstart', onMouseDown, { passive: false });

        document.addEventListener('mouseup', onMouseUp, true);
        document.addEventListener('touchend', onMouseUp, { passive: false });

        document.addEventListener('mousemove', onMouseMove, true);
        document.addEventListener('touchmove', onMouseMove, { passive: false });
    }

    function onMouseDown(e) {
        var posInfo = e.touches ? e.touches[0] : e,
            rootElClientRect;
        if (!posInfo) return;
        if (!dndBackAnimFinished || (e.buttons !== undefined && e.buttons !== 1)) return;
        dndIsDown = true;
        rootEl.style.transition = '0ms';

        rootElClientRect = rootEl.getBoundingClientRect();

        if (rootElClientRect) {
            var rootElPosX = rootElClientRect.x;

            if (!dndFinalHorPos) {
                dndFinalHorPos = isLeftAligned ? rootElPosX : window.innerWidth - rootElPosX - btnSize - (window.innerWidth - document.documentElement.clientWidth);
            }

            dndBtnLeftPos = rootElPosX;
            rootEl.style.setProperty('left', rootElPosX + 'px', 'important');
            rootEl.style.setProperty('right', 'auto', 'important');

            dndInitMousePos = [
                posInfo.clientX,
                posInfo.clientY
            ];

            dndBtnTopPos = parseInt(rootElClientRect.top, 10);

            rootEl.style.setProperty('top', dndBtnTopPos + 'px', 'important');
            rootEl.style.setProperty('bottom', 'auto', 'important');
        }
    }

    function onMouseMove(e) {
        var posInfo = e.touches ? e.touches[0] : e;
        var newLeftPos, newTopPos;
        if (!posInfo) return;

        if (dndIsDown) {
            togglePopupVisibility(false);
            hideRecognisedText(0, true);
            e.preventDefault();
            afterMouseMove = true;

            newLeftPos = dndBtnLeftPos + posInfo.clientX - dndInitMousePos[0];
            newTopPos = dndBtnTopPos + posInfo.clientY - dndInitMousePos[1];
            tempDeltaX = posInfo.clientX - dndInitMousePos[0];
            tempDeltaY = posInfo.clientY - dndInitMousePos[1];
            rootEl.style.setProperty('left', correctXPos(newLeftPos) + 'px', 'important');
            rootEl.style.setProperty('top', correctYPos(newTopPos) + 'px', 'important');
            e.preventDefault();
            return false;
        }
        
    }

    function onMouseUp(e) {
        var curX, curY;
        var posInfo;
        if (dndIsDown) {
            posInfo = e.changedTouches ? e.changedTouches[0] : e;
            if (!posInfo) return;
            dndIsDown = false;
            rootEl.style.transition = dndAnimTransition;
            curX = parseInt(rootEl.style.left, 10);
            curY = parseInt(rootEl.style.top, 10);

            if (curX <= window.innerWidth / 2) {
                rootEl.style.setProperty('left', dndFinalHorPos + 'px', 'important');
                changeBtnSide('to-left');
                isLeftAligned = true;
                isRightAligned = false;
                setTextPanelPosition(recognisedTextHolder, curY);
                btnWasMoved = true;
                setTimeout(function () {
                    togglePopupVisibility(true);
                    saveBtnPosition('left', dndFinalHorPos, curY);
                }, dndAnimDelay);
            } else {
                rootEl.style.setProperty('left', window.innerWidth - dndFinalHorPos - btnSize - (window.innerWidth - document.documentElement.clientWidth) + 'px', 'important');
                setTimeout(function () {
                    rootEl.style.setProperty('right', dndFinalHorPos + 'px', 'important');
                    changeBtnSide('to-right');
                    isLeftAligned = false;
                    isRightAligned = true;
                    setTextPanelPosition(recognisedTextHolder, curY);
                    saveBtnPosition('right', dndFinalHorPos, curY);
                    btnWasMoved = true;
                    dndBackAnimFinished = true;
                    togglePopupVisibility(true);
                }, dndAnimDelay);
            }

            setTimeout(function () {
                afterMouseMove = false;
            }, 300);

            if (Math.abs(tempDeltaX) < 15 && Math.abs(tempDeltaY) < 15) {
                afterMouseMove = false;
                dndBackAnimFinished = true;
            }
        }
    }

    function correctYPos(yPos) {
        var defDelta = 10;
        if (yPos < defDelta) {
            return defDelta;
        } else {
            if (yPos > window.innerHeight - btnSize - defDelta) {
                return window.innerHeight - btnSize - defDelta;
            }
        }
        return yPos;
    }

    function correctXPos(xPos) {
        var defDelta = 10;
        if (xPos < defDelta) {
            return defDelta;
        } else if (xPos > window.innerWidth - btnSize - defDelta) {
            return window.innerWidth - btnSize - defDelta;
        }
        return xPos;
    }

    function changeBtnSide(side) {
        if (side === 'to-left') {
            rootEl.style.setProperty('right', 'auto', 'important');
        } else {
            rootEl.style.setProperty('left', 'auto', 'important');
        }
        setStylesBasedOnSide();
    }

    function saveBtnPosition(orientation, x, y) {
        if (!keepButtonPositionAfterDnD) return;
        if (isSessionStorageAvailable) {
            var projectId = getProjectId();
            sessionStorage.setItem('alan-btn-saved-orientation-' + projectId, orientation);
            sessionStorage.setItem('alan-btn-saved-x-pos-' + projectId, Math.floor(x));
            sessionStorage.setItem('alan-btn-saved-y-pos-' + projectId, Math.floor(y));
        }
    }

    function clearSavedBtnPosition() {
        if (isSessionStorageAvailable) {
            var projectId = getProjectId();
            sessionStorage.removeItem('alan-btn-saved-orientation-' + projectId);
            sessionStorage.removeItem('alan-btn-saved-x-pos-' + projectId);
            sessionStorage.removeItem('alan-btn-saved-y-pos-' + projectId);
        }
    }


    function getSavedBtnPosition() {
        if (isSessionStorageAvailable) {
            var projectId = getProjectId();
            var savedOptions = {
                orientation: sessionStorage.getItem('alan-btn-saved-orientation-' + projectId),
                x: +sessionStorage.getItem('alan-btn-saved-x-pos-' + projectId),
                y: +sessionStorage.getItem('alan-btn-saved-y-pos-' + projectId),
            };

            if (savedOptions.orientation) {
                return savedOptions;
            }

            return null;
        }
        return null;
    }

    //#endregion

    return btnInstance;
}
ns.alanBtn = alanBtn;
ns.alanBtn.getDebugInfo = getDebugInfo;

})(window);

return alanBtn;
}));


/***/ })
/******/ ]);
//# sourceMappingURL=main.233f1b08.js.map