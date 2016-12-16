// ==UserScript==
// @name          YouTube DeepDark
// @namespace     https://github.com/
// @author        RaitaroH
// @homepage      https://github.com/RaitaroH/YouTube-DeepDark
// @icon          https://raw.githubusercontent.com/RaitaroH/YouTube-DeepDark/master/YTDD-icon.png      
// @include       http://youtube.com/* 
// @include       https://youtube.com/* 
// @include       http://*.youtube.com/* 
// @include       https://*.youtube.com/* 
// @include       http://apis.google.com/* 
// @include       https://apis.google.com/* 
// @include       http://*.apis.google.com/* 
// @include       https://*.apis.google.com/*
// @match         *://www.youtube.com/*
// @exclude       https://www.youtube.com/yt/*
// @exclude       https://www.youtube.com/t/*
// @run-at        document-start
// @version       1.3.2-1
// @grant         GM_getValue
// @grant         GM_setValue
// Changelog: 1.3.2-1 very small fix
// Changelog: 1.3.2 some div background in big resolution fix (see comment here http://forum.userstyles.org/discussion/52943/x),,searchbar results fix,youtube logo responsive hidden,welcome for youtube+ background,cinema mode black bars removed,while watching element fix in fullscreen playlist view
// Changelog: 1.3.1 opacity tweaked for a softer feel,fullscreen playlist author color,changed border color for cards on hover
// Changelog: 1.3.0 yt menu selected hover fix,yt logo hover opacity,opacity for thumbnails in playlists set to 1
// Changelog: 1.2.9 fixed cricle being cutoff in the channels page,circle for channels in the search results,removing completly the (the case for bubble menus)
// Changelog: 1.2.8 opacity on hover for thumbnails and avatars,circle avatars (Well let's do it before YouTube does it),cards text,youtube+ tweaks
// Changelog: 1.2.7 better code layout,small fixes
// Changelog: 1.2.6 upload makeover,comments in live stream makeover
// Changelog: 1.2.5-1 youtube logo back to 100%
// Changelog: 1.2.5 footer fix, excluded some stuff I am not gonna theme
// Changelog: 1.2.4 70% logo style thx to youtube rewind,special hover for video titles suggested+in playlists (I was really annoying to get this working, thx YouTube),button text changed to white (BUT SERIOUSLLY YOUTUBE CAN"T YOU HAVE ONE DAMN KIND OF BUTTON),show more hover background color,added to watch later icon succes fix,g-hovercard fix,change white to a 95% for a softer look&feel,removed blue text-shadow,changed some text to #ccc,choose language alert fix,button fix,youtube html5 page background
// Changelog: 1.2.3 youtube html5 page fixes,dashboard makeover,html5 video title link hover fix,notifications fix, hover for footer links
// Changelog: 1.2.2 /channels makeover,comments like button ,creator heart color change, hover for buttons, fullscreen cards fixes, small other fixes
// Changelog: What about the earlier versions? I released the code at 1.2.1
// ==/UserScript==

(function() {var css = [
"/*1.3.2*/",
	
  "/*Hiding some crap section*/",
	"	   .yt-uix-clickcard-card-reverse .yt-uix-card-body-arrow-vertical, .yt-uix-hovercard-card-reverse .yt-uix-card-body-arrow-vertical,.yt-uix-card-body-arrow-horizontal,.yt-uix-clickcard-card-flip .yt-uix-card-body-arrow-horizontal, .yt-uix-hovercard-card-flip .yt-uix-card-body-arrow-horizontal,.yt-uix-clickcard-card-reverse .yt-uix-card-border-arrow-vertical,.yt-uix-button-primary .yt-uix-button-arrow,.iph-dialog-pointer-up,.iph-dialog-pointer-down,.yt-uix-button-subscribe-branded::before,.comment-simplebox-arrow .arrow-inner, .comment-simplebox-arrow .arrow-outer,.yt-uix-clickcard-card-reverse .yt-uix-card-body-arrow-vertical{",
	"		 display:none !important;",
	"	}",
	"/* Why YT has box shadows beats me*/",
	"		  .gssb_e,.Zm-Zs-jk .Zm-at-Zb-Md,.d-Ib,.audio-ui-featured-row,.masthead-search-terms-borders,.masthead-search-terms-border,.yt-uix-button-default.yt-uix-button-toggled{",
	"			box-shadow: none !important;",
	"	}",
	
	
	"/*Background image change section*/",
	"	/*Changing liked button color + other stuff*/",
	"		  #player-playlist .yt-uix-button-toggled.yt-uix-playlistlike::before,#pl-header .yt-uix-button-toggled.yt-uix-playlistlike::before,.like-button-renderer-like-button.yt-uix-button.yt-uix-button-toggled::before{",
	"			background-image: url(https://i.imgur.com/iNxIReU.png) !important;",
	"	}",
	"	/*Changing liked button color + other stuff*/",
	"		  #comment-section-renderer .sprite-like[data-action-on]::before {",
	"			background-image: url(https://i.imgur.com/mKJm8ki.png) !important;",
	"	}",
	"	/*Changing buttons in the dashboard*/",
	"		  #creator-sidebar .studio-icon.creator-sidebar-create.selected, #creator-sidebar a:hover .studio-icon.creator-sidebar-create.selected,#creator-sidebar .studio-icon.creator-sidebar-translations-and-transcriptions.selected, #creator-sidebar a:hover .studio-icon.creator-sidebar-translations-and-transcriptions.selected,#creator-sidebar .creator-sidebar-analytics.selected, #creator-sidebar a:hover .studio-icon.creator-sidebar-analytics.selected,#creator-sidebar .studio-icon.creator-sidebar-channel.selected, #creator-sidebar a:hover .studio-icon.creator-sidebar-channel.selected,#creator-sidebar .studio-icon.creator-sidebar-community.selected, #creator-sidebar a:hover .studio-icon.creator-sidebar-community.selected,#creator-sidebar .studio-icon.creator-sidebar-live-streaming,#creator-sidebar .studio-icon.creator-sidebar-video-manager.selected, #creator-sidebar a:hover .studio-icon.creator-sidebar-video-manager.selected,#creator-sidebar .studio-icon.creator-sidebar-dashboard.selected, #creator-sidebar a:hover .studio-icon.creator-sidebar-dashboard.selected {",
	"			background-image: url(https://i.imgur.com/PgFNJRL.png) !important;",
	"	}",

	
	"	/*Youtube logo - change size to 100% if is too small - 70% is for YT Rewind*/",
	"    .exp-responsive #yt-masthead #logo-container,#masthead-logo, #yt-masthead #logo-container .logo, #footer-logo .footer-logo-icon, .footer-logo{",
	"    background: no-repeat url(https://i.imgur.com/9wGydcv.png) !important;",
	"    background-size: 100% !important;",
	"    opacity: 0.65 !important;",
	"}",
	"    .exp-responsive #yt-masthead #logo-container:hover,#masthead-logo:hover,#yt-masthead #logo-container .logo:hover,#footer-logo .footer-logo-icon:hover,.footer-logo:hover{",
	"    opacity: 0.75 !important;",
	"}",	
	
	
	"/*Backgrounds section*/",
	"	/*Many many things*/",
	"		  .Zm-ct-Md,.timedtext-content,.multitrack-timeline,.iph-dialog, .iph-dialog-iframe,.annotator-endscreen-splash,#audio-ui-search-input-field,#featured-tracks-header,#inline-editor-main,.metadata-editor-container .video-settings-form,.live-comments-emoji-picker-tab-row,.live-chat-widget .comment.alternate-row,.live-chat-widget .comment,.yt-rtl,.yt-ltr,.footer-container,#footer .yt-picker,.xta .obc,.nbc,.part_hide_footer,.howto-promo-container,.social-connector,.account-container,#storyboard,storyboard *,.track-list li.track .audiolibrary-track-head,.yt-uix-overlay-actions,.HPHGCHB-F-j,.HPHGCHB-b-d,.live-welcome-intro,.account-feature-v2-grid-items li,.video-dds .list,.tabbed-page .tab,#vm-pagination,.advanced-search-footer,#non-appbar-vm-video-actions-bar .vm-video-actions-inner, .view-all-playlists #non-appbar-vm-video-actions-bar .vm-video-actions-inner,.related-item-dismissed-container,#dashboard-header-stats li,.analytics-sparkline-card.yt-uix-sessionlink,.dashboard-widget-header:hover .dashboard-widget-overlay-icon, .dashboard-widget.yt-uix-dragdrop-dragged-item .dashboard-widget-header .dashboard-widget-header-controls, .dashboard-widget.yt-uix-dragdrop-cursor-follower .dashboard-widget-header .dashboard-widget-header-controls,.dashboard-widget.notification, .dashboard-widget .dashboard-widget-content, .dashboard-widget .dashboard-widget-config,.dashboard-widget-header:hover, .dashboard-widget .dashboard-widget-config .dashboard-widget-header, .dashboard-widget.yt-uix-dragdrop-dragged-item .dashboard-widget-header, .dashboard-widget.yt-uix-dragdrop-cursor-follower .dashboard-widget-header,.subscription-preferences-overlay-content .yt-uix-overlay-actions,.nbc,.yt-dialog-fg, .yt-uix-overlay-fg ,.yt-ui-menu-item,.pl-video,.watch-stage-mode #player-playlist .player-height,#player-playlist .playlist-header,#player-playlist .playlist-videos-list,.yt-uix-button-c4-view-action,.show-guide #appbar-guide-menu,.yt-uix-button-nakedicon,#player-playlist .playlist-videos-list li,.channel-header .secondary-header-contents,.channel-header .primary-header-contents, #guide-container,.branded-page-v2-primary-col .branded-page-box.video-player-view-component:last-child, .branded-page-v2-primary-col .branded-page-box.c4-featured-content:last-child, .branded-page-v2-primary-col .branded-page-box.c4-featured-content-editor:last-child, .branded-page-v2-primary-col .branded-page-box.welcome:last-child,.branded-page-v2-secondary-col .yt-card,#browse-items-primary .item-section > li > .yt-lockup-tile, #browse-items-primary .item-section > li > .multirow-shelf, .browse-list-item-container.feed-item-container.branded-page-box, .compact-shelf.branded-page-box,.guide-pinned .guide-pinning-enabled #appbar-guide-menu,body #footer-container,.branded-page-v2-top-row #channel-subheader,.yt-uix-expander-collapsed .yt-ui-ellipsis.yt-ui-ellipsis-10,.video-player-view-component .description,.yt-lockup-title a, .yt-lockup:hover a, .yt-lockup:hover .yt-lockup-meta a, .yt-lockup:hover .yt-lockup-description a,.video-player-view-component .video-detail .title,.branded-page-v2-subnav-container,#channels-browse-content-grid.grid-lockups-container,.yt-card,.yt-ui-ellipsis,#watch8-action-buttons, .yt-card .yt-uix-expander .yt-uix-button-expander,.comment-simplebox-renderer-collapsed-content,.exp-comments-refresh .comment-thread-renderer:not(:last-of-type) .comment-replies-renderer,.sitewide-consent-visible .yt-consent-banner,.comment-simplebox-renderer,.yt-uix-button-menu,.yt-ui-menu-content,.search-header,.yt-masthead-account-picker.yt-uix-clickcard-card-content,.yt-uix-clickcard-card-border, .yt-uix-hovercard-card-border,.yt-masthead-picker-footer,.iv-card-content,.ytp-ce-expanding-overlay-background{",
	"			background: #111 !important;",
	"			border-color: #444 !important;",
	"	}",
	"		  .gssb_i td,#appbar-content,td:hover,.watch-stage-mode #theater-background,#creator-appbar-actions-bar,body,#page-container,#body-container,#yt-masthead-container,#appbar-nav,.share-panel-url,.share-panel-start-at-time,.share-embed-code,.share-email .share-email-recipients, .share-email .share-email-note {",
	"			background: #181818 !important;",
	"	}",
	"     .Zm-Jw-kq-Jw-Fo,.Zm-Jw-kq-cb,.timeline-row,.vm-list-view .vm-video-list .vm-video-item,.yt-alert-panel,.html5-compatibility-table li,no-flash-error,.HPHGCHB-r-a,.yt-uix-form-input-select-content,#comment-settings .comment-settings-header,.video-dds .topline,.tabbed-page .tab.active,#creator-sidebar .creator-sidebar-section.selected > a.selected, #creator-sidebar .creator-sidebar-item.selected > a,#creator-sidebar > #creator-sidebar-section-id-dashboard.selected > h3 a, #creator-sidebar > #creator-sidebar-section-id-your-contributions.selected > h3 a,.dashboard-widget-footer .dashboard-widget-view-all-link:hover,.comment-simplebox,.comment-simplebox-text, .comment-simplebox-prompt,.share-email-preview-container,#player-playlist :not(.watch-queue-nav) .playlist-videos-list li.currently-playing,#pl-header .pl-header-title:hover,.add-to-widget .create-playlist-item:hover,#pl-header .pl-header-description-text:hover{",
	"			background: #222 !important;",
	"	}",
	"	/*Hover for menus and such*/",	
  "     .audio-ui-featured-row:hover,.watch-editable:hover,.vm-list-view .vm-video-metrics a:hover,.video-dds .entry:hover .highlight,.yt-uix-form-input-select-element option,#creator-sidebar .creator-sidebar-section a:hover,#player-playlist .playlist-videos-list li:hover,.add-to-widget .addto-playlist-item:hover,.yt-ui-menu-item:active{",
	"			background: #3a3a3a !important;",
	"	}",
  "     .yt-card .yt-uix-button-expander:hover{",
	"			background: rgba(0,0,0,.1) !important;",
	"	}",
	"		.yt-uix-menu-trigger-selected .yt-ui-menu-item, .yt-ui-menu-item:hover{",
	"		   background: #333 !important;",
	"	}",
	"		.track:hover .audiolibrary-track-head .audiolibrary-column .popularity-bar, .track.loading .audiolibrary-track-head .audiolibrary-column .popularity-bar, .track.expanded .audiolibrary-track-head .audiolibrary-column .popularity-bar,.HPHGCHB-P-e h3,.HPHGCHB-ob-d,.HPHGCHB-K-h .datePickerWeekdayLabel, .HPHGCHB-K-h .datePickerWeekendLabel, .HPHGCHB-K-h .datePickerDay{",
	"		   background: #fff !important;",
	"	}",
	"		.vm-list-view .vm-video-item-content-horizontal-divider{",
	"			background: #444 !important;",
	"	}",
	".comment-renderer.channel-owner .comment-author-text:hover,.comment-renderer-author-comment-badge.creator:hover{",
	"			background: #333 !important;",	
	"	}",	
	"/* Things that I want to not have a background such in the case of a hover */",
	"		  #eow-title:hover,#audio-ui-pagefold,.HPHGCHB-ob-d,.HPHGCHB-P-e h3,.yt-uix-button-panel:hover .creator-bar-item .yt-uix-button-text-dark, .yt-uix-button-panel .creator-bar-item .yt-uix-button-text-dark:hover,.standalone-collection-badge-renderer-text a,.yt-uix-clickcard-title, .yt-uix-hovercard-title,.ytp-ce-size-853 .ytp-ce-video-title, .ytp-ce-size-853 .ytp-ce-playlist-title,.yt-dialog-base .yt-dialog-header .yt-dialog-close,.exp-comments-refresh .comment-replies-renderer-view, .exp-comments-refresh .comment-replies-renderer-hide, .exp-comments-refresh .comment-replies-renderer-paginator, .exp-comments-refresh .comment-author-text,#comment-section-renderer .sprite-comment-actions,#yt-masthead-user #sb-button-notify,.ytp-ce-size-640 .ytp-ce-video-title, .ytp-ce-size-640 .ytp-ce-playlist-title,#advanced-options,#player-console,.comment-renderer-reply,#player-playlist :not(.watch-queue-nav) .playlist-videos-list li.currently-playing .yt-ui-ellipsis,#player-playlist .playlist-videos-list .yt-ui-ellipsis,.guide-sort-button,.yt-badge,.exp-comments-refresh #comment-section-renderer .comment-renderer-reply,.ytp-ce-video-title{",
	"			background: transparent !important;",
	"			border-color: transparent !important;",
	"	}",
	
	
	"/*Borders section*/",
	"		  .gssb_e,.Zm-Jw-kq-Jw-Fo,.Zm-Jw-kq-cb,.Zm-Zs-jk .Zm-at-Zb-Md,.d-Ib,.creator-editor-header,.audio-ui-featured-row,.vm-list-view .vm-video-list .vm-video-item,.top-menu,.track-list li.track,#creator-subheader,.yt-horizontal-rule,.guide-section-separator,#yt-masthead .yt-masthead-logo-container,#yt-masthead-container,#appbar-nav,#masthead-appbar,#watch7-sidebar .watch-sidebar-separation-line,.pl-video,#pl-header,.progress-bar-uploading .progress-bar-progress,.live-chat-widget #comments-scroller,.html5-compatibility-table li,.tabbed-page .options-bar,#comment-settings .comment-settings-section,#comment-settings,#comment-settings .comment-settings-item,.video-dds,.tabbed-page .tabs-wrapper,.tabbed-page .tabs-area,.dashboard-widget:hover .dashboard-widget-display-title, .dashboard-widget.yt-uix-dragdrop-dragged-item .dashboard-widget-display-title, .dashboard-widget.yt-uix-dragdrop-cursor-follower .dashboard-widget-display-title,.feed-header,.yt-lockup-playlist-item,.ytp-cards-teaser .ytp-cards-teaser-box,#c4-header-bg-container,#footer-main,div.about-metadata-label:nth-child(7),div.about-metadata-label:nth-child(9),.yt-card .yt-uix-tabs{",
	"		  border-color: #444 !important;",
	"	}",
	"		.tabbed-page .tab.active{",
	"			border-top: 3px solid #00adee !important;",
	"	}", 
	"		.menu-tab:hover, .menu-tab.selected{",
	"			border-bottom: 4px solid #00adee !important;",
	"	}", 
	"		#hide-live-comments .yt-uix-button-expander{",
	"			border: 0px;",
	"	}", 
	"		.yt-card.yt-uix-expander .yt-uix-button-expander{",
	"			border-top: 1px solid #444 !important;",
	"	}", 
	"		  #subscription-playlist{",
	"			border-color: #ED3F00 !important;",
	"	}",
	"		  .ytp-video-menu-item-thumbnail,.ytp-ce-element.ytp-ce-element-show:hover,.Zm-at-Zb-mi-Yb-Do .a-mi-w,.Zm-at-Zb-mi-Yb-Do .a-mi-v,.creator-editor-nav-tabs li.selected > a, .creator-editor-nav-tabs li:hover > a,.yt-uix-button-subscribe-unbranded:hover,.yt-uix-button.yt-uix-button-subscribe-branded:hover, .yt-uix-button.yt-uix-button-subscribed-branded:hover,.yt-card .yt-uix-tabs .yt-uix-button:hover, .yt-card .yt-uix-tabs .yt-uix-button:active, .yt-card .yt-uix-tabs .yt-uix-button.yt-uix-button-active, .yt-card .yt-uix-tabs .yt-uix-button.yt-uix-button-toggled,a.yt-uix-button.yt-uix-button-epic-nav-item:hover,.tabs .tab-header:hover,.tabs .tab-header.selected,.yt-gb-shelf-item-thumbtab.yt-gb-selected-shelf-tab::before,.epic-nav-item-heading,.epic-nav-item-heading:hover{",
	"			border-color: #00adee !important;",
	"	}",
	

	"/*Buttons section*/",
	"		  a.yt-uix-button{",
	"			border-color: rgb(0,0,0) !important;",
	"	}",
	"	/*For partially selected menu (watch later playlist)*/",
	"		  a.yt-uix-button-epic-nav-item.partially-selected{",
	"			border-color: #767676 !important;",
	"	}",
	"	/*Main buttons*/",
	"		  .comment-replies-renderer-paginator,.yt-uix-shelfslider .yt-uix-shelfslider-prev, .yt-uix-shelfslider .yt-uix-shelfslider-next,.Zm-St .d-u,#vm-view-btn,.HPHGCHB-g-f,#gh-playlist-save,.yt-lockup-thumbnail .blacklist,.yt-uix-button-default, .yt-uix-button-default[disabled],.yt-uix-livereminder-main-button,.browse-items-load-more-button,.yt-uix-button.addto-watch-later-button-success,body .addto-watch-later-button,.edit-button,.remove-watched-button,#gh-playlist-add-video,.ytp-cards-teaser .ytp-cards-teaser-text,.pl-video-list-editable .pl-video:hover .pl-video-handle, .yt-uix-dragdrop-cursor-follower .pl-video-handle,.pl-video-edit-more, .pl-video-edit-remove, .pl-video-edit-remove-liked-video,.thumb-wrapper .blacklist,.thumb-wrapper .popoutmode,.yt-lockup-thumbnail .popoutmode,.yt-uix-button.yt-uix-button-subscribe-unbranded, .yt-uix-button.yt-uix-button-subscribed-unbranded,.yt-uix-button.yt-uix-button-subscribe-branded, .yt-uix-button.yt-uix-button-subscribed-branded,.yt-uix-shelfslider .yt-uix-shelfslider-prev, .yt-uix-shelfslider .yt-uix-shelfslider-next,.comment-section-sort-menu > button:nth-child(1),#upload-btn,.related-list-item .video-actions,#masthead-search .search-btn-component, #masthead-search .search-btn-component .start,.shelf-item .branded-page-module-title .shelves-play,.subnav-sort-menu,.branded-page-v2-subnav-container .subnav-flow-menu,.subnav-view-menu,.sub-menu-back-button,#yt-picker-language-button,#yt-picker-country-button,#yt-picker-safetymode-button,a.yt-uix-button:nth-child(3),#google-help,.playlist-play-all,.playlist-share,.yt-uix-subscription-preferences-button,.share-panel-playlist-options > button:nth-child(3),a.yt-masthead-picker-button:nth-child(1),a.yt-masthead-picker-button:nth-child(2),a.yt-masthead-picker-button:nth-child(4){",
	"			background: linear-gradient(rgb(50,50,50), rgb(40,40,40)) !important;",
	"			border-color: rgb(0,0,0) !important;",
	"	}",
	"	/*Button hover*/",
	"		  .comment-replies-renderer-paginator:hover,.yt-uix-shelfslider .yt-uix-shelfslider-prev:hover, .yt-uix-shelfslider .yt-uix-shelfslider-next:hover,.Zm-St .d-u:hover,#vm-view-btn:hover,.HPHGCHB-g-f:hover,#gh-playlist-save:hover,.yt-lockup-thumbnail .blacklist:hover,.yt-uix-button-default:hover,.yt-uix-button-default[disabled]:hover,.yt-uix-livereminder-main-button:hover,.browse-items-load-more-button:hover,.yt-uix-button.addto-watch-later-button-success:hover,body .addto-watch-later-button:hover,.edit-button:hover,.remove-watched-button:hover,#gh-playlist-add-video:hover,.ytp-cards-teaser .ytp-cards-teaser-text:hover,.pl-video-list-editable .pl-video:hover .pl-video-handle:hover,.yt-uix-dragdrop-cursor-follower .pl-video-handle:hover,.pl-video-edit-more:hover,.pl-video-edit-remove:hover,.pl-video-edit-remove-liked-video:hover,.thumb-wrapper .blacklist:hover,.thumb-wrapper .popoutmode:hover,.yt-lockup-thumbnail .popoutmode:hover,.yt-uix-button.yt-uix-button-subscribe-unbranded:hover,.yt-uix-button.yt-uix-button-subscribed-unbranded:hover,.yt-uix-button.yt-uix-button-subscribe-branded:hover,.yt-uix-button.yt-uix-button-subscribed-branded:hover,.yt-uix-shelfslider .yt-uix-shelfslider-prev:hover,.yt-uix-shelfslider .yt-uix-shelfslider-next:hover,.comment-section-sort-menu > button:nth-child(1):hover,#upload-btn:hover,.related-list-item .video-actions:hover,#masthead-search .search-btn-component:hover,#masthead-search .search-btn-component .start:hover,.shelf-item .branded-page-module-title .shelves-play:hover,.subnav-sort-menu:hover,.branded-page-v2-subnav-container .subnav-flow-menu:hover,.subnav-view-menu:hover,.sub-menu-back-button:hover,#yt-picker-language-button:hover,#yt-picker-country-button:hover,#yt-picker-safetymode-button:hover,a.yt-uix-button:nth-child(3):hover,#google-help:hover,.playlist-play-all:hover,.playlist-share:hover,.yt-uix-subscription-preferences-button:hover,.share-panel-playlist-options > button:nth-child(3):hover,a.yt-masthead-picker-button:nth-child(1):hover,a.yt-masthead-picker-button:nth-child(2):hover,a.yt-masthead-picker-button:nth-child(4):hover{",		
	"			background: linear-gradient(rgb(70,70,70), rgb(60,60,60)) !important;",
  "			transition: .1s ease-in !important;",
	"			color: #00adee !important;",
	"	}",
	"/* Blue buttons and backgrounds*/",
	"		  #part_welcome,.Zm-Fc-Jk-ty-qi .d-u,.yt-alert-default.yt-alert-success, .yt-alert-actionable.yt-alert-success, .yt-alert-naked.yt-alert-success .yt-alert-icon, .yt-alert-small.yt-alert-success,.iph-dialog a.iph-dialog-nav-button,.upload-item-main .save-changes-button,.live-chat-widget #live-comments-setting-bottom-scroll,.yt-alert-default.yt-alert-info, .yt-alert-actionable.yt-alert-info, .yt-alert-naked.yt-alert-info .yt-alert-icon, .yt-alert-small.yt-alert-info,.track-selection-menu.track-filter-tab.filter-selected,.HPHGCHB-F-e.HPHGCHB-F-m, .HPHGCHB-F-k.HPHGCHB-F-m,.HPHGCHB-P-b,.creator-heart-small-left,.creator-heart-small-right,.comment-renderer.channel-owner .comment-author-text,#appbar-main-guide-notification-container .appbar-guide-notification-content-wrapper,#appbar-main-guide-notification-container .appbar-guide-notification,.appbar-guide-notification,.comment-renderer-author-comment-badge.creator,.yt-uix-button-primary,.guide-item.guide-item-selected, .guide-item.guide-item-selected:hover, .yt-uix-button-primary[disabled], .yt-uix-button-primary[disabled]:hover, .yt-uix-button-primary[disabled]:active, .yt-uix-button-primary[disabled]:focus,.yt-uix-checkbox-on-off input[type=\"checkbox\"]:checked + label,.resume-playback-progress-bar,.video-extras-sparkbar-likes{",
	"			background: #00adee !important;",
	"			border-color: #00adee !important;",
	"	}",
	"	/*Inverting icon images*/",
	"		  .comment-replies-renderer-expander-up::after,.comment-replies-renderer-expander-down::after,.compact-shelf .yt-uix-shelfslider-prev-arrow, .rtl .compact-shelf .yt-uix-shelfslider-next-arrow,.d-u-Q .d-u-x,.Zm-Jw-kq-Dj .Zm-Jt-zu-Hc-i-um-kj, .Zm-Jw-kq-Dj .Zm-Jt-zu-Hc-i-Cu, .Zm-Jw-kq-Dj .Zm-Jt-zu-Hc-i-Au-Bu, .Zm-Jw-kq-Dj .Zm-Jt-zu-Hc-i-yj-zk, .Zm-Jw-kq-Dj .Zm-Jt-zu-Hc-i-zk,.Zm-ru-db-mi,.vm-search-btn .yt-uix-button-content,.creator-editor-nav-tabs li > span .yt-sprite, .creator-editor-nav-tabs li a .yt-sprite,.vm-list-view .vm-video-metric.video-dislikes-count .yt-sprite,.creator-bar-item .yt-uix-button-icon-audio,.creator-bar-item .yt-uix-button-icon-captions,.creator-bar-item .yt-uix-button-icon-cards,.creator-bar-item .yt-uix-button-icon-endscreen,.creator-bar-item .yt-uix-button-icon-enhance,.creator-bar-item .yt-uix-button-icon-info,.creator-bar-item .yt-uix-button-icon-audio.vm-list-view .vm-video-metric.video-dislikes-count .yt-sprite,.vm-list-view .vm-video-metric.video-likes-count .yt-sprite,.vm-list-view .vm-video-metric.video-comments .yt-sprite,.yt-uix-button-icon-material-upload,.yt-uix-button-empty.yt-uix-button-has-icon.no-icon-markup::before,#video-tab img,#cc-tab img,#images-tab img,#audio-tab img,#transition-tab img,#text-tab img,#keyboard-help-tab img,.track .expand-button .track-action-icon,.track.attribution .license-button .track-action-icon,.track .play-pause-button.play-visible .track-action-icon, .track:hover .play-pause-button.play-hover .track-action-icon, .track.expanded .play-pause-button.play-hover .track-action-icon,.HPHGCHB-W-u,.HPHGCHB-P-j,.HPHGCHB-n-c,.yt-help-icon,.yt-gb-shelf-paddle.yt-gb-shelf-right-paddle,.yt-gb-shelf-paddle.yt-gb-shelf-left-paddle,.yt-dialog-base .yt-dialog-header .yt-dialog-close .yt-uix-button-content,.add-to-widget .private-icon,.add-to-widget .public-icon,.pl-header-privacy-everyone,.pl-video-annotation-icon,.header-action-icon.vm-icon,.yt-uix-button .yt-uix-button-arrow,.pl-header-privacy-only-me,.compact-shelf .yt-uix-shelfslider-next-arrow, .rtl .compact-shelf .yt-uix-shelfslider-prev-arrow,.yt-uix-button-has-icon.no-icon-markup::before,.comment-section-sort-menu > button:nth-child(1) > span:nth-child(2),#search-btn > span:nth-child(1),.yt-uix-button-default::before,.subnav-sort-menu > span:nth-child(2),.subnav-view-menu > span:nth-child(2),.subnav-flow-menu > span:nth-child(2),.yt-uix-button-icon-channel-back,.yt-uix-button-icon-footer-language,span.yt-uix-button-arrow:nth-child(3),#yt-picker-country-button > span:nth-child(2),#yt-picker-safetymode-button > span:nth-child(2),.yt-uix-button-icon-footer-history,.yt-uix-button-icon-questionmark,#player-playlist .yt-uix-playlistlike::before, #yt-masthead-user #yt-masthead-notifications-button,.yt-uix-subscription-preferences-button.yt-uix-subscription-notifications-all::before,.share-panel-playlist-options > button:nth-child(3) > span:nth-child(2),.yt-uix-button-has-icon::before,.yt-ui-menu-item.has-icon::before,.filter-button > span:nth-child(2),.yt-uix-button-default::before, .yt-uix-button-default .yt-uix-button-icon,.yt-uix-menu-top-level-flow-button .yt-uix-button-opacity[disabled],.yt-uix-button-icon-view-list,.gsst_a,.autoplay-bar .autoplay-info-icon{",
	"			filter: invert(100%);",
	"	}",
	"	/*Some buttons don't need to be inverted because they will be orange*/",
	"	    .HPHGCHB-P-g h2 a:hover .HPHGCHB-P-j,.addto-watch-later-button-success::before,#comment-section-renderer .sprite-like[data-action-on]::before,.yt-uix-button-subscribed-branded::before,.addto-watch-later-button-success::before,#player-playlist .yt-uix-button-toggled.yt-uix-playlistlike::before,#pl-header .yt-uix-button-toggled.yt-uix-playlistlike::before,.like-button-renderer-like-button.yt-uix-button.yt-uix-button-toggled::before,.exp-comments-refresh #comment-section-renderer .comment-renderer .sprite-comment-actions[data-action-on]::before{",
	"			filter: invert(0%) !important;",
	"	}",
	"	/*Some icons are too white*/",
	"		 .creator-bar-item .yt-uix-button-icon-audio,.creator-editor-icon-audio{",
	"			opacity: 0.60 !important;",
	"	}",
  "	/*It looks better this way*/",
	"		 .HPHGCHB-n-c,#creator-sidebar .studio-icon.creator-sidebar-live-streaming{",
	"			opacity: 0.2 !important;",
	"	}",
	"	    #channel-search .show-search .search-icon{",
	"		  opacity: 1 !important;",
	"	}",
	"	/*Subscribers count; Search bar*/",
	"     #gs_tti50:hover,tbody,.subscriptions-filter .filter-field-container,.subscriptions-filter .filter-field .yt-uix-form-input-fluid,.yt-subscription-button-subscriber-count-branded-horizontal,.exp-responsive #content .yt-uix-button-subscription-container .yt-subscriber-count,#masthead-search-terms,.yt-uix-button-subscribe-unbranded + .yt-subscription-button-subscriber-count-unbranded-horizontal{",	
	"			background: #555 !important;",
	"			border: none !important;",
	"	}",
	"	/*Name of the owner of the channel*/",
  ".comment-renderer.channel-owner .comment-author-text{",
	"			padding-left: 5px !important;",	
	"			padding-right: 5px !important;",	
	"			margin-right: 1px !important;",
	"			border-radius: 25px !important;",	
	"	}",	
	"/*Channel is veryfied icon spacing*/",
	"	  .comment-renderer-author-comment-badge.creator .yt-comment-author-verified-icon{",
	"		margin-left: 5px !important;",
	"	}",
	
	
  "/*Resizing section*/",
	"	  .exp-comments-refresh .comment-renderer-like-count{",
	"		min-width: 15px !important;",
	"	}",
	"	  .yt-badge{",
	"		padding: 0 0 !important;",
	"	}",
	"	 	.guide-builder-search .search-button{",
	"		 height: 33px !important;",
	"	}",
	"		#player-console{",
	"		top: 20px !important;",
	"	}",
	"/*Why not 100% tho? WTF Youtube*/",
	"	  .watch-title-container{",
	"		width: 100% !important;",
	"	}",

	
	"/*Colors and text section*/",
	"	/*Permanently highlighted*/",
	"		.ytp-video-menu-item-author,.comment-renderer-like-count,#player-playlist .video-uploader-byline,span.video-uploader-byline:hover,.zvd,.track:hover .audiolibrary-track-head .audiolibrary-column,.ytp-ce-size-853 .ytp-ce-website-title, .ytp-ce-size-853 .ytp-ce-channel-title,.video-list-item .mix-playlist .stat,.guide-item-subtitle,.playlist-title,.comment-replies-renderer-view, .comment-replies-renderer-hide,#player-playlist .video-uploader-byline,span.video-uploader-byline,.ytp-ce-size-640 .ytp-ce-channel-title,.g-hovercard,#pl-header .pl-header-title,li.guide-section h3 a,#player-playlist .playlist-title a,.yt-badge,.exp-responsive .yt-lockup-tile .yt-lockup-byline .yt-uix-sessionlink,#item-section-599813 > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1) > a:nth-child(1),.ytp-ce-website-metadata,.ytp-ce-channel-title,li.guide-section h3,#player-playlist :not(.watch-queue-nav) .playlist-videos-list li.currently-playing .index,a,#action-panel-details a, .yt-lockup .yt-lockup-meta a, .yt-lockup .yt-lockup-description a,.channel-header .branded-page-header-title .branded-page-header-title-link,.branded-page-base-bold-titles .channel-header .branded-page-header-title .branded-page-header-title-link,div.watch-sidebar-body:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(3) > span:nth-child(1),.video-player-view-component .video-detail a,.yt-uix-button-subscribe-branded > span:nth-child(1) > span:nth-child(1){",
	"		color: rgba(0,173,238,.9)  !important;",
	"		text-decoration: none  !important;",
	"   text-shadow: none !important;",
	"	}",
	"		#masthead-search-term,.gssb_m,#guide-container .guide-item.guide-item-selected:hover,div.about-metadata-label:nth-child(5) > span:nth-child(1),div.about-metadata-label:nth-child(7) > span:nth-child(1),#creator-sidebar .creator-sidebar-branding h1,.iph-dialog a,.iph-dialog-title,.blur-effect-entry .blur-effect-title,.menu-tab:hover, .menu-tab.selected,#player-and-info-pane #video-info h2,.HPHGCHB-F-d > p:nth-child(1),.metadata-container h3,.metadata-thumbnail-chooser h3,.upload-item-sidebar-text h3,.upload-footer-header,.upload-sidebar-header,.Zm-at-Zb-mi-Yb-Do .Zm-at-Zb-eu,.Zm-Jw-kq-cb,.Zm-ii-tc,#upload-button-text,.yt-picker-header h3.yt,.yt-uix-clickcard-title, .yt-uix-hovercard-title,.yt-alert-default.yt-alert-info, .yt-alert-actionable.yt-alert-info, .yt-alert-naked.yt-alert-info .yt-alert-icon, .yt-alert-small.yt-alert-info,.HPHGCHB-P-b,a.yt-uix-button-primary > span:nth-child(1),button.open-banner-image-editor > span:nth-child(2),.yt-uix-button-icon-wrapper + .yt-uix-button-content,button.yt-uix-button-primary:nth-child(2) > span:nth-child(1),.appbar-guide-notification,#creator-sidebar h3, #creator-sidebar h3 a,button.yt-uix-button-primary:nth-child(1) > span:nth-child(1),.account-header h1,.account-info-item .account-info-label,.yt-uix-button-content,#main-title,.live-welcome-intro-copy .headline,#creator-subheader h2,.category-title-wrap:hover .category-title-link .category-title,.category-header .category-title,.comment-simplebox-text, .comment-simplebox-prompt,.guide-item.guide-item-selected:hover,.guide-item.guide-item-selected,.comment-renderer.channel-owner .comment-author-text:hover,.comment-renderer.channel-owner .comment-author-text,.comment-renderer-author-comment-badge.creator .comment-author-text,.html5-video-player a,.branded-page-base-bold-titles .branded-page-module-title,.branded-page-module-title a:visited, .branded-page-module-title a, .epic-nav-item-heading:active,.branded-page-related-channels h3 a, .branded-page-related-channels h3,.epic-nav-item-heading,#eow-title,.yt-consent-banner .yt-consent-content, .yt-lockup-title a,.yt-masthead-picker-name,.ytp-ce-video-title,.yt-card .yt-uix-button-expander,.yt-card .yt-uix-button-expander:hover{",
	"   color: rgba(255, 255, 255, .95)  !important;",
	"		text-shadow: none  !important;",
	"	}",
	"		.yt-uix-clickcard-card-content, .yt-uix-hovercard-card-content,.ytp-ce-channel-metadata,.yt-uix-button-subscribe-branded + .yt-subscription-button-subscriber-count-branded-horizontal, .yt-uix-button-subscribe-unbranded + .yt-subscription-button-subscriber-count-unbranded-horizontal, .yt-uix-button-subscribe-branded + .yt-uix-subscription-preferences-button + .yt-subscription-button-subscriber-count-branded-horizontal, .yt-uix-button-subscribed-branded + .yt-subscription-button-subscriber-count-branded-horizontal.subscribed, .yt-uix-button-subscribed-unbranded + .yt-subscription-button-subscriber-count-unbranded-horizontal.subscribed, .yt-uix-button-subscribed-branded + .yt-uix-subscription-preferences-button + .yt-subscription-button-subscriber-count-branded-horizontal.subscribed,.analytics-sparkline-card .infos .title,.dashboard-widget-header h2,.vm-video-actions-delete-warning,#video-settings-section,.iph-dialog-content,.yt-default h1, .yt-default h2, .yt-default h3, .yt-default h4, .yt-default h5, .yt-default h6, h1.yt, h2.yt, h3.yt, h4.yt, h5.yt, h6.yt,.audio-ui-featured-row td,.enhance-effect .slider-readout, .enhance-effect .property-title,#player-and-info-pane #video-info dd,#player-and-info-pane #video-info dt,.HPHGCHB-W-q .HPHGCHB-W-F,.HPHGCHB-ob-d,.HPHGCHB-P-e h3,.metadata-share-text,.upload-other-options-list .upload-option-text,.Zm-Ob-pi > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2),.live-chat-widget .comment-text,.pl-video-annotation-container,.yt-uix-expander-collapsed .yt-uix-expander-collapsed-body,#yt-lang-alert-content,.idle-message, .no-results-message,.audio-library-tab-subtitle,.audiolibrary-column-title, .audiolibrary-column-title-expand,.HPHGCHB-O-b h3,.HPHGCHB-K-f .HPHGCHB-K-j input,.HPHGCHB-g-f,#comment-settings .comment-settings-label,.account-settings-info,h3.account-section-header,.account-settings-item .account-settings-label,.yt-uix-form-input-select-element option,.yt-uix-form-input-select-content,.account-status-copyright-status-v2-details-table-type-column, .account-status-copyright-status-v2-details-table-event-column, .account-status-copyright-status-v2-details-table-content-column, .account-status-copyright-status-v2-title, .account-status-community-guidelines-status-v2-details-table-type-column, .account-status-community-guidelines-status-v2-details-table-event-column, .account-status-community-guidelines-status-v2-details-table-content-column, .account-status-community-guidelines-status-v2-title, .account-status-v2-strike-type-label,#comment-settings .comment-settings-title,.yt-alert-naked .yt-alert-content,.subscription-confirmation-dialog .subscription-confirmation-display-name,.yt-dialog-base .yt-dialog-header .yt-dialog-title,#watch7-sidebar .watch-sidebar-head,.secondary-header-contents .nav-text,#yt-uix-videoactionmenu-menu h3,.yt-subscription-button-subscriber-count-branded-horizontal,.add-to-widget .create-playlist-item,.yt-ui-menu-item,.yt-uix-button-menu .yt-uix-button-menu-item,.ytp-cards-teaser .ytp-cards-teaser-text,.yt-uix-button-subscribed-branded + .yt-subscription-button-subscriber-count-branded-horizontal.subscribed,.yt-uix-button-subscribed-branded + .yt-uix-subscription-preferences-button + .yt-subscription-button-subscriber-count-branded-horizontal.subscribed,.yt-uix-button.yt-uix-button-subscribed-branded,.exp-wn-font-14 .related-list-item span.title,#eow-description,.exp-responsive #content .yt-uix-button-subscription-container .yt-subscriber-count,#body #uploaded-videos,yt-card .yt-uix-button-expander,yt-card .yt-uix-button-expander:hover,hr, html, i, iframe, img, ins, kbd, label, legend, li, menu, object, ol, p, pre, q, s, samp, small, strike, strong, sub,a, abbr, acronym, address, applet, b, big, blockquote,.comment-section-header-renderer,div.yt-ui-ellipsis:nth-child(1),.yt-uix-form-input-text,.iv-card h2,.ytp-ce-website-title{",
	"		color: #ccc !important;",
	"	}",
	"/*Hover for links & other stuff*/",
	"   .ytp-video-menu-item-now-playing,.yt-uix-sessionlink.spf-link:hover,.yt-picker-region-name:hover,.yt-picker-content strong,.track.loading .audiolibrary-track-head .audiolibrary-column, .track.expanded .audiolibrary-track-head .audiolibrary-column,#footer-links-primary a:hover,#footer-links-secondary a:hover,.spf-link.branded-page-header-title-link.yt-uix-sessionlink:hover,.yt-uix-sessionlink:hover,.category-header .category-title-link:hover .category-title, .category-header .category-count-link:hover .channel-count, .category-header .category-link:hover .all-categories,.ytp-ce-size-853 .ytp-ce-website-title:hover, .ytp-ce-size-853 .ytp-ce-channel-title:hover,.about-channel-link-text:hover,.comment-replies-renderer-view, .comment-replies-renderer-hide:hover,.comment-renderer-author-comment-badge.creator .comment-author-text:hover,.yt-uix-sessionlink.comment-author-text.g-hovercard.spf-link:hover,.video-uploader-byline:hover,.g-hovercard.yt-uix-sessionlink.spf-link:hover,.ytp-ce-size-640 .ytp-ce-channel-title:hover,#body #uploaded-videos:hover,#uploaded-videos:hover,#player-playlist .playlist-title a:hover,a:hover.yt-lockup-title a:hover,.iv-card:hover .iv-card-primary-link,.exp-wn-font-14 .related-list-item span.title:hover,.yt-lockup:hover a,.yt-lockup:hover .yt-lockup-meta a,.yt-lockup:hover .yt-lockup-description a,.branded-page-header-title-link:hover,.yt-uix-button-subscribe-branded > span:nth-child(1) > span:nth-child(1):hover,.g-hovercard:hover,#action-panel-details a:hover,.video-player-view-component .video-detail a:hover,.branded-page-v2-secondary-col .branded-page-related-channels-see-more a:hover{",
	"   color: #00adee !important;",
  "  /* text-shadow: 0px 0px 3px rgba(0,173,238,.5) !important;  I removed this because it bleeds in other ellements*/",
	"	}",
	"/*Hover for titles in wach later (edit mode) and when title is to the right of the image (when you watch a video and hover an image of a video suggested on the right side). Oh, it took me a while to do this because YouTube can't decide to add just one hover rule but several, thx for that btw.*/",
	"   .pl-video.yt-uix-dragdrop-draggable-item:hover + .pl-video-title-link.yt-uix-tile-link.yt-uix-sessionlink.spf-link,.pl-video:hover .pl-video-title-link, .pl-video:hover .pl-video-owner a,.pl-video-title-link.yt-uix-tile-link.yt-uix-sessionlink.spf-link:hover,#watch7-sidebar .video-list-item:hover .title, #watch7-sidebar .video-list-item:hover .title .yt-deemphasized-text,#watch7-sidebar .video-list-item a:hover .title,.video-list-item:hover + .exp-wn-font-14 .related-list-item span.title,.exp-wn-big-thumbs-v3 .related-list-item .yt-uix-simple-thumb-related:hover + .exp-wn-font-14 .related-list-item span.title,.exp-wn-big-thumbs-v3 .related-list-item .yt-uix-simple-thumb-related:hover + .video-list .video-list-item .title,.video-list-item:hover + .video-list .video-list-item .title{",
	"   color: #00adee !important;",
	"}",
	
	
	"/*Going full circle section*/",	
  "/*Make avatars circles (50% or more) or squares (0). Also added opacity change on hover.*/",	
	"	  .yt-lockup-channel > div:nth-child(1) > a:nth-child(1) > div:nth-child(1),.xta .dOc,.not-yt-legacy-css .yt-masthead-picker-photo-wrapper img,#yt-masthead-user .yt-masthead-user-icon,.yt-thumb-46,.yt-thumb-20,.comment-author-thumbnail,.yt-thumb-48,.yt-thumb-110,.channel-header-profile-image-container,.channel-header-profile-image,#appbar-nav .appbar-nav-avatar{",
	"		border-radius: 100% !important;",
	"	  background: transparent !important;",
	"	  border-color: transparent !important;",	
	"	  opacity: 0.9;",	
	"	}",
	"	  .xta .dOc:hover,.not-yt-legacy-css .yt-masthead-picker-photo-wrapper img:hover,#yt-masthead-user .yt-masthead-user-icon:hover,.yt-thumb-46:hover,.yt-thumb-20:hover,.comment-author-thumbnail:hover,.yt-thumb-48:hover,.yt-thumb-110:hover,.channel-header-profile-image-container:hover,.channel-header-profile-image:hover,#appbar-nav .appbar-nav-avatar{",
	"	  opacity: 1 !important;",	
	"	}",
  "/*Remove a stupid border around  the circle (the background) */",
	"	  .yt-thumb{",
	"	  background: transparent !important;",
	"	  border-color: transparent !important;",	
  "	  opacity: 0.9;",
	"	}",
  "/*For the icon in the channel banner*/",
	"	  .channel-header-profile-image-container{",
	"		top: 10px !important;",
	"	}",
  "/*Circle gets cut off in the channels page*/",
	"	  .channels-content-item.channel-shelf-item{",
	"		width: 130px !important;",
	"	}",
	
	
  "/*Thumbnails opacity section*/",	
  "/*Opacity for thumbnails. For watched is 0.9 on hover because by default they are 0.7 so I want to keep a drustic change on hover to the minimum.*/",		
	"	  #player-playlist .playlist-video .video-thumb,.yt-thumb:hover,.exp-wn-big-thumbs-v3 .related-list-item .thumb-wrapper:hover,.exp-wn-big-thumbs-v3 .related-list-item .yt-pl-thumb .yt-thumb:hover{",
  "	  opacity: 1 !important;",	
	"	}",
	"	  .exp-wn-big-thumbs-v3 .related-list-item .thumb-wrapper,.exp-wn-big-thumbs-v3 .related-list-item .yt-pl-thumb .yt-thumb{",
  "	  opacity: 0.9 !important;",	
	"	}",
  "/*Special opacity for watched videos*/",
	"	  .watched .video-thumb:hover{",
  "	  opacity: 0.8 !important;",	
	"	}",	
	
	"/*Video section*/",
	"	/*Video title hover in html5 video*/",
	"		.html5-video-player a:hover{",
	"   color: #fff !important;",
  "   text-shadow: none !important;",
	"	}",	
  "/* Code takken from https://userstyles.org/styles/95280 */",	
	"/* scrubber button */",
	"   .html5-scrubber-button:hover, .ytp-chrome-controls .ytp-button[aria-pressed]::after, .ytp-scrubber-button:hover, .ytp-swatch-background-color, .ytp-swatch-background-color-secondary {",
	"   background: #00adee !important;",
	"}",
	"/* progress bar */",
	"   .html5-play-progress, .ytp-play-progress {",
	"   background: #00adee !important; ",
	"}",
	"   .ytp-volume-slider-track, .ytp-volume-slider-handle:before {",
	"   background: #00adee !important;",
	"   z-index: -117;",
	"}",
	"   .ytp-settings-button.ytp-hd-quality-badge::after, .ytp-settings-button.ytp-4k-quality-badge::after, .ytp-settings-button.ytp-5k-quality-badge::after, .ytp-settings-button.ytp-8k-quality-badge::after, .ytp-settings-button.ytp-3d-badge::after {",
	"   background-color: #00adee !important;",
	"}",
	"   .ytp-swatch-color {",
	"   color: #00adee !important;",
	"}",
	"   .ytp-menuitem[aria-checked=\"true\"] .ytp-menuitem-toggle-checkbox {",
	"   background: #00adee !important;",
	"}",
	"   .ytp-chrome-controls .ytp-button.ytp-youtube-button:hover:not([aria-disabled=\"true\"]):not([disabled]) .ytp-svg-fill-logo-tube-lozenge {",
	"   fill: #00adee !important;",
	"}",
	"   .ytp-cued-thumbnail-overlay:hover .ytp-large-play-button-bg, .ytp-large-play-button.ytp-touch-device .ytp-large-play-button-bg {",
	"   fill: #00adee !important;",
	"}",

	
	"/*Youtube+ Section*/",
	"   .P-impexp,.thumb-svg,#subscription-playlist,#console-button,#autoplay-button,#loop-button,#save-thumbnail-button,#screenshot-button,#popout-button,#fullbrowser-button,#cinemamode-button,#shortcuts-button,#yt-masthead #P{",
	"	  filter: invert(100%);",
	"	}",
	"   #P-content h2,#P-content h3,.P-implang,#P-settings option{",
	"   color: #ccc !important;",
	"}",
	"   #P-settings {",
	"   background: #111 !important; ",
	"}",
	"   #exp-cont,#P-content {",
	"   background: #1e1e1e !important; ",
	"}",
	"   #P-sidebar-list > li.selected,#P-settings option:hover,.P-save{",
	"   background: #00adee !important; ",
	"   color: #fff !important;",
	"}",
	"   #P-sidebar-list > li:hover,#P-settings option  {",
	"   background: #3a3a3a !important; ",
	"}",
	"/*	I can't change the color here because in the script they put !important*/",
	"   #P-settings select,#P-content select{",
	"			background: #00adee !important;",
	"			border-color: #00adee !important;",
	"}",	
	"   .P-reset,.P-reset:hover{",
	"		background: linear-gradient(rgb(50,50,50), rgb(40,40,40)) !important;",
  "		border-color: rgb(0,0,0) !important;",
	"   color: #fff !important;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
