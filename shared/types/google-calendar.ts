export interface GoogleCalendarEvent {
	id: string;
	summary: string;
	description?: string;
	location?: string;
	start: {
		dateTime?: string;
		date?: string;
	};
	end: {
		dateTime?: string;
		date?: string;
	};
}

export interface GoogleCalendarResponse {
	kind: string;
	etag: string;
	summary: string;
	timeZone: string;
	updated: string;
	items: GoogleCalendarEvent[];
}
