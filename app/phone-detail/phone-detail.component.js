"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phoneDetail = require("./phone-detail.module");
phoneDetail.component('phoneDetail', {
    templateUrl: 'app/phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
        function PhoneDetailController($routeParams, Phone) {
            var self = this;
            self.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
                self.setImage(phone.images[0]);
            });
            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});
//# sourceMappingURL=phone-detail.component.js.map