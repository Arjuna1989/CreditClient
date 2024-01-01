
module directives.credit {
    export class UploadFiles implements ng.IDirective {

        public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ngModel: ng.INgModelController) => void;
        public require = "ngModel";

        constructor() {
            this.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ngModel: ng.INgModelController) => {


                element.bind('change', function (event: any) {

                    var files = event.target.files;
                    if (files.length != 1)
                        alert('Multiple files not allowed');
                    else {
                        scope.$emit("seletedFile", { file: files[0] });
                    }
                });
            };
        }

        public static Factory(): ng.IDirectiveFactory {
            var directive = () => {
                return new UploadFiles();
            }
            return directive;
        }
    }
}