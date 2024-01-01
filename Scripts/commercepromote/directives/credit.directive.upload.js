var directives;
(function (directives) {
    var credit;
    (function (credit) {
        var UploadFiles = /** @class */ (function () {
            function UploadFiles() {
                this.require = "ngModel";
                this.link = function (scope, element, attrs, ngModel) {
                    element.bind('change', function (event) {
                        var files = event.target.files;
                        if (files.length != 1)
                            alert('Multiple files not allowed');
                        else {
                            scope.$emit("seletedFile", { file: files[0] });
                        }
                    });
                };
            }
            UploadFiles.Factory = function () {
                var directive = function () {
                    return new UploadFiles();
                };
                return directive;
            };
            return UploadFiles;
        }());
        credit.UploadFiles = UploadFiles;
    })(credit = directives.credit || (directives.credit = {}));
})(directives || (directives = {}));
//# sourceMappingURL=credit.directive.upload.js.map