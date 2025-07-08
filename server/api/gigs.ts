import type { GoogleCalendarResponse } from '~/types/google-calendar'; // or wherever you place it

export default defineEventHandler(async (): Promise<GoogleCalendarResponse> => {
	const calendarId = process.env.GOOGLE_CALENDAR_ID;
	const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

	// Validate environment variables
	if (!calendarId) {
		throw createError({
			statusCode: 500,
			statusMessage: 'GOOGLE_CALENDAR_ID environment variable is not set',
		});
	}

	if (!apiKey) {
		throw createError({
			statusCode: 500,
			statusMessage: 'GOOGLE_CALENDAR_API_KEY environment variable is not set',
		});
	}

	const timeMin = new Date().toISOString();

	try {
		const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&singleEvents=true&orderBy=startTime`;
		const res = await $fetch<GoogleCalendarResponse>(url);
		return res;
	} catch (error: any) {
		console.error('Error fetching Google Calendar events:', error);
		throw createError({
			statusCode: 500,
			statusMessage: 'Failed to fetch calendar events from Google Calendar API',
		});
	}
});
