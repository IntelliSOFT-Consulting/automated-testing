
import moment from 'moment';

const startDate = new Date();
const endDate = new Date(startDate.getTime() - (8 * 24 * 60 * 60 * 1000));

export const MOCKS = {
    SYSTEM_SETTIINGS: {
      dateAndTimeFormat: {
        URL: '/openmrs/ws/rest/v1/systemsetting?v=custom:(value)&q=labworkflowowa.dateAndTimeFormat',
        RESPONSE: {
          body: {
            results: [
              {
                value: "DD-MMM-YYYY HH:mm"
              }
            ]
          }
        }
      }

    }

}