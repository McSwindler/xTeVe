var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SettingsCategory = /** @class */ (function () {
    function SettingsCategory() {
        this.DocumentID = "content_settings";
    }
    SettingsCategory.prototype.createCategoryHeadline = function (value) {
        var element = document.createElement("H4");
        element.innerHTML = value;
        return element;
    };
    SettingsCategory.prototype.createHR = function () {
        var element = document.createElement("HR");
        return element;
    };
    SettingsCategory.prototype.createSettings = function (settingsKey) {
        var setting = document.createElement("TR");
        var content = new PopupContent();
        var data = SERVER["settings"][settingsKey];
        switch (settingsKey) {
            // Texteingaben
            case "update":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.update.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "update", data.toString());
                input.setAttribute("placeholder", "{{.settings.update.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "backup.path":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.backupPath.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "backup.path", data);
                input.setAttribute("placeholder", "{{.settings.backupPath.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "temp.path":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.tempPath.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "temp.path", data);
                input.setAttribute("placeholder", "{{.settings.tmpPath.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "user.agent":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.userAgent.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "user.agent", data);
                input.setAttribute("placeholder", "{{.settings.userAgent.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "buffer.timeout":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.bufferTimeout.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "buffer.timeout", data);
                input.setAttribute("placeholder", "{{.settings.bufferTimeout.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "ffmpeg.path":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.ffmpegPath.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "ffmpeg.path", data);
                input.setAttribute("placeholder", "{{.settings.ffmpegPath.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "ffmpeg.options":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.ffmpegOptions.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "ffmpeg.options", data);
                input.setAttribute("placeholder", "{{.settings.ffmpegOptions.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "vlc.path":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.vlcPath.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "vlc.path", data);
                input.setAttribute("placeholder", "{{.settings.vlcPath.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "vlc.options":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.vlcOptions.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "vlc.options", data);
                input.setAttribute("placeholder", "{{.settings.vlcOptions.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "streamlink.path":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.streamlinkPath.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "streamlink.path", data);
                input.setAttribute("placeholder", "{{.settings.streamlinkPath.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "streamlink.options":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.streamlinkOptions.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "streamlink.options", data);
                input.setAttribute("placeholder", "{{.settings.streamlinkOptions.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            // Checkboxen
            case "authentication.web":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.authenticationWEB.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createCheckbox(settingsKey);
                input.checked = data;
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "authentication.pms":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.authenticationPMS.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createCheckbox(settingsKey);
                input.checked = data;
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "authentication.m3u":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.authenticationM3U.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createCheckbox(settingsKey);
                input.checked = data;
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "authentication.xml":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.authenticationXML.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createCheckbox(settingsKey);
                input.checked = data;
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "authentication.api":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.authenticationAPI.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createCheckbox(settingsKey);
                input.checked = data;
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "files.update":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.filesUpdate.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createCheckbox(settingsKey);
                input.checked = data;
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "cache.images":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.cacheImages.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createCheckbox(settingsKey);
                input.checked = data;
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "xepg.replace.missing.images":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.replaceEmptyImages.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createCheckbox(settingsKey);
                input.checked = data;
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "xteveAutoUpdate":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.xteveAutoUpdate.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createCheckbox(settingsKey);
                input.checked = data;
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "api":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.api.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createCheckbox(settingsKey);
                input.checked = data;
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            // Select
            case "tuner":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.tuner.title}}" + ":";
                var tdRight = document.createElement("TD");
                var text = new Array();
                var values = new Array();
                for (var i = 1; i <= 100; i++) {
                    text.push(i);
                    values.push(i);
                }
                var select = content.createSelect(text, values, data, settingsKey);
                select.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(select);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "epgSource":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.epgSource.title}}" + ":";
                var tdRight = document.createElement("TD");
                var text = ["PMS", "XEPG"];
                var values = ["PMS", "XEPG"];
                var select = content.createSelect(text, values, data, settingsKey);
                select.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(select);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "backup.keep":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.backupKeep.title}}" + ":";
                var tdRight = document.createElement("TD");
                var text = ["5", "10", "20", "30", "40", "50"];
                var values = ["5", "10", "20", "30", "40", "50"];
                var select = content.createSelect(text, values, data, settingsKey);
                select.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(select);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "buffer.size.kb":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.bufferSize.title}}" + ":";
                var tdRight = document.createElement("TD");
                var text = ["0.5 MB", "1 MB", "2 MB", "3 MB", "4 MB", "5 MB", "6 MB", "7 MB", "8 MB"];
                var values = ["512", "1024", "2048", "3072", "4096", "5120", "6144", "7168", "8192"];
                var select = content.createSelect(text, values, data, settingsKey);
                select.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(select);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "buffer":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.streamBuffering.title}}" + ":";
                var tdRight = document.createElement("TD");
                var text = ["{{.settings.streamBuffering.info_false}}", "xTeVe: ({{.settings.streamBuffering.info_xteve}})", "FFmpeg: ({{.settings.streamBuffering.info_ffmpeg}})", "VLC: ({{.settings.streamBuffering.info_vlc}})", "Streamlink: ({{.settings.streamBuffering.info_streamlink}})"];
                var values = ["-", "xteve", "ffmpeg", "vlc", "streamlink"];
                var select = content.createSelect(text, values, data, settingsKey);
                select.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(select);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
            case "udpxy":
                var tdLeft = document.createElement("TD");
                tdLeft.innerHTML = "{{.settings.udpxy.title}}" + ":";
                var tdRight = document.createElement("TD");
                var input = content.createInput("text", "udpxy", data);
                input.setAttribute("placeholder", "{{.settings.udpxy.placeholder}}");
                input.setAttribute("onchange", "javascript: this.className = 'changed'");
                tdRight.appendChild(input);
                setting.appendChild(tdLeft);
                setting.appendChild(tdRight);
                break;
        }
        return setting;
    };
    SettingsCategory.prototype.createDescription = function (settingsKey) {
        var description = document.createElement("TR");
        var text;
        switch (settingsKey) {
            case "authentication.web":
                text = "{{.settings.authenticationWEB.description}}";
                break;
            case "authentication.m3u":
                text = "{{.settings.authenticationM3U.description}}";
                break;
            case "authentication.pms":
                text = "{{.settings.authenticationPMS.description}}";
                break;
            case "authentication.xml":
                text = "{{.settings.authenticationXML.description}}";
                break;
            case "authentication.api":
                if (SERVER["settings"]["authentication.web"] == true) {
                    text = "{{.settings.authenticationAPI.description}}";
                }
                break;
            case "xteveAutoUpdate":
                text = "{{.settings.xteveAutoUpdate.description}}";
                break;
            case "backup.keep":
                text = "{{.settings.backupKeep.description}}";
                break;
            case "backup.path":
                text = "{{.settings.backupPath.description}}";
                break;
            case "temp.path":
                text = "{{.settings.tempPath.description}}";
                break;
            case "buffer":
                text = "{{.settings.streamBuffering.description}}";
                break;
            case "buffer.size.kb":
                text = "{{.settings.bufferSize.description}}";
                break;
            case "buffer.timeout":
                text = "{{.settings.bufferTimeout.description}}";
                break;
            case "user.agent":
                text = "{{.settings.userAgent.description}}";
                break;
            case "ffmpeg.path":
                text = "{{.settings.ffmpegPath.description}}";
                break;
            case "ffmpeg.options":
                text = "{{.settings.ffmpegOptions.description}}";
                break;
            case "vlc.path":
                text = "{{.settings.vlcPath.description}}";
                break;
            case "vlc.options":
                text = "{{.settings.vlcOptions.description}}";
                break;
            case "streamlink.path":
                text = "{{.settings.streamlinkPath.description}}";
                break;
            case "streamlink.options":
                text = "{{.settings.streamlinkOptions.description}}";
                break;
            case "epgSource":
                text = "{{.settings.epgSource.description}}";
                break;
            case "tuner":
                text = "{{.settings.tuner.description}}";
                break;
            case "update":
                text = "{{.settings.update.description}}";
                break;
            case "api":
                text = "{{.settings.api.description}}";
                break;
            case "files.update":
                text = "{{.settings.filesUpdate.description}}";
                break;
            case "cache.images":
                text = "{{.settings.cacheImages.description}}";
                break;
            case "xepg.replace.missing.images":
                text = "{{.settings.replaceEmptyImages.description}}";
                break;
            case "udpxy":
                text = "{{.settings.udpxy.description}}";
                break;
            default:
                text = "";
                break;
        }
        var tdLeft = document.createElement("TD");
        tdLeft.innerHTML = "";
        var tdRight = document.createElement("TD");
        var pre = document.createElement("PRE");
        pre.innerHTML = text;
        tdRight.appendChild(pre);
        description.appendChild(tdLeft);
        description.appendChild(tdRight);
        return description;
    };
    return SettingsCategory;
}());
var SettingsCategoryItem = /** @class */ (function (_super) {
    __extends(SettingsCategoryItem, _super);
    function SettingsCategoryItem(headline, settingsKeys) {
        var _this = _super.call(this) || this;
        _this.headline = headline;
        _this.settingsKeys = settingsKeys;
        return _this;
    }
    SettingsCategoryItem.prototype.createCategory = function () {
        var _this = this;
        var headline = this.createCategoryHeadline(this.headline);
        var settingsKeys = this.settingsKeys;
        var doc = document.getElementById(this.DocumentID);
        doc.appendChild(headline);
        // Tabelle für die Kategorie erstellen
        var table = document.createElement("TABLE");
        var keys = settingsKeys.split(",");
        keys.forEach(function (settingsKey) {
            switch (settingsKey) {
                case "authentication.pms":
                case "authentication.m3u":
                case "authentication.xml":
                case "authentication.api":
                    if (SERVER["settings"]["authentication.web"] == false) {
                        break;
                    }
                default:
                    var item = _this.createSettings(settingsKey);
                    var description = _this.createDescription(settingsKey);
                    table.appendChild(item);
                    table.appendChild(description);
                    break;
            }
        });
        doc.appendChild(table);
        doc.appendChild(this.createHR());
    };
    return SettingsCategoryItem;
}(SettingsCategory));
function showSettings() {
    console.log("SETTINGS");
    for (var i = 0; i < settingsCategory.length; i++) {
        settingsCategory[i].createCategory();
    }
}
function saveSettings() {
    console.log("Save Settings");
    var cmd = "saveSettings";
    var div = document.getElementById("content_settings");
    var settings = div.getElementsByClassName("changed");
    var newSettings = new Object();
    for (var i = 0; i < settings.length; i++) {
        var name;
        var value;
        switch (settings[i].tagName) {
            case "INPUT":
                switch (settings[i].type) {
                    case "checkbox":
                        name = settings[i].name;
                        value = settings[i].checked;
                        newSettings[name] = value;
                        break;
                    case "text":
                        name = settings[i].name;
                        value = settings[i].value;
                        switch (name) {
                            case "update":
                                value = value.split(",");
                                value = value.filter(function (e) { return e; });
                                break;
                            case "buffer.timeout":
                                value = parseFloat(value);
                        }
                        newSettings[name] = value;
                        break;
                }
                break;
            case "SELECT":
                name = settings[i].name;
                value = settings[i].value;
                // Wenn der Wert eine Zahl ist, wird dieser als Zahl gespeichert
                if (isNaN(value)) {
                    newSettings[name] = value;
                }
                else {
                    newSettings[name] = parseInt(value);
                }
                break;
        }
    }
    var data = new Object();
    data["settings"] = newSettings;
    var server = new Server(cmd);
    server.request(data);
}
