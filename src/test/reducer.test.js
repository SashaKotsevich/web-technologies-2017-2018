import TabsReducer from "../reducer"

describe('Reducer test', () => {
    it('User test', () => {
        let state = {};
        state = TabsReducer(state, {type: 'USER_FETCH_SUCCEEDED', user: 'repo'});
        expect(state).toEqual({User: 'repo'});
    });
    it('Followers test', () => {
        let state = {};
        state = TabsReducer(state, {type: 'FOLLOWS_FETCH_SUCCEEDED', data: [{login:'22'},{login:'23'}]});
        expect(state).toEqual({FollowersTab: '22\n23\n'});
    });
    it('Repos test', () => {
        let state = {};
        state = TabsReducer(state, {type: 'REPOS_FETCH_SUCCEEDED', data: [{name:'22'},{name:'23'}]});
        expect(state).toEqual({ReposTab: '22\n23\n'});
    });
    it('Change date test', () => {
        let state = {};
        state = TabsReducer(state, {type: 'ChangeTabData', data:{BasicTab:"10"}});
        expect(state).toEqual({BasicTab:"10"});
    });
    it('Orgs test', () => {
        let state = {};
        state = TabsReducer(state, {type: 'ORGS_FETCH_SUCCEEDED', data: [{name:'22'},{name:'23'}]});
        expect(state).toEqual({OrgsTab: '22\n23\n'});
    });
    it('Orgs toppopular', () => {
        let state = {};
        state = TabsReducer(state, {type: 'TOPPOPULAR_FETCH_SUCCEEDED', data:{items: [{name:'22'},{name:'23'}]}});
        expect(state).toEqual({TopStarReposTab: '22\n23\n'});
    });
    it('Orgs topgrowing', () => {
        let state = {};
        state = TabsReducer(state, {type: 'TOPGROWING_FETCH_SUCCEEDED', data:{items: [{name:'22'},{name:'23'}]}});
        expect(state).toEqual({TopGrowingTab: '22\n23\n'});
    });
   
   
});