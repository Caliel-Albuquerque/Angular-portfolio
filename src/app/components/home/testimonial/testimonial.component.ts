import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "src/app/services/analytics/analytics.service";

@Component({
	selector: "app-testimonial",
	templateUrl: "./testimonial.component.html",
	styleUrls: ["./testimonial.component.scss"],
})
export class TestimonialComponent implements OnInit {
	constructor(public analyticsService: AnalyticsService) {}

	ngOnInit(): void {}
}
