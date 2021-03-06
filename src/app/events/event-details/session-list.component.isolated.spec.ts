import {SessionListComponent} from './session-list.component';
import {ISession} from '../shared/event.model';

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthServices, mockVoterService;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthServices, mockVoterService);
    });

    describe('ngOnChanges', () => {
        it('should filter the sessions correctly', () => {
            component.sessions = ([{name: 'session 1', level: 'intermediate'},
            {name: 'session 2', level: 'intermediate'},
            {name: 'session 3', level: 'beginner'}] as ISession[]);
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSession.length).toBe(2);
        });

        it('should sort the sessions correctly', () => {
            component.sessions = ([{name: 'session 1', level: 'intermediate'},
            {name: 'session 3', level: 'beginner'},
            {name: 'session 2', level: 'intermediate'}] as ISession[]);
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSession[2].name).toBe('session 3');
        });
    });
});
