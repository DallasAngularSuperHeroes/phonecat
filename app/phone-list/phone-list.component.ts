import * as phoneListModule from './phone-list.module';

phoneListModule.
  component('phoneList', {
    templateUrl: 'app/phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
      console.log('=> phone-list.component.ts:8 PhoneListController Phone ' + JSON.stringify(Phone));
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
