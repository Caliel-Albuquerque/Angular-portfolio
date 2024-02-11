import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { AboutComponent } from "./about/about.component";
import { BannerComponent } from "./banner/banner.component";
import { ContactComponent } from "./contact/contact.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { JobsComponent } from "./jobs/jobs.component";
import { MoreprojectsComponent } from "./more-projects/more-projects.component";
import { projectsComponent } from "./projects/projects.component";
import { NgbModule, NgbNav, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselModule } from "ngx-owl-carousel-o";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
	declarations: [
		HomeComponent,
		BannerComponent,
		AboutComponent,
		JobsComponent,
		projectsComponent,
		MoreprojectsComponent,
		ContactComponent,
		TestimonialComponent,
	],
	imports: [
		CommonModule,
		NgbNavModule,
		CarouselModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
})
export class HomeModule {}
