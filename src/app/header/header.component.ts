import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	// user = {
	// 	name: 'Arthur',
	// 	age: 42
	// };


	constructor(public translate: TranslateService) {
		translate.addLangs(['en', 'ar']);
		translate.setDefaultLang('en');

		const browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
	}


	ngOnInit() {
	}

}
