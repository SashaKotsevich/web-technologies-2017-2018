import * as actions from '../actions/actions';

describe('Actions test', () => {
    it('Action changeuseraction', () => {
        const user = actions.changeuseraction();
        expect(user).toEqual({type: "ChangeUser"});
    });
    it('Action changereposaction', () => {
        const Repos = actions.changereposaction();
        expect(Repos).toEqual({type: 'ChangeRepos'});
    });
    it('Action changefollowsaction', () => {
        const follows = actions.changefollowsaction();
        expect(follows).toEqual({type: 'ChangeFollows'});
    });
    it('Action changeorgsaction', () => {
        const orgs = actions.changeorgsaction();
        expect(orgs).toEqual({type: "ChangeOrgs"});
    });
    it('Action changetabaction', () => {
        const tab = actions.changetabaction();
        expect(tab).toEqual({type: 'ChangeTabData'});
    });
    it('Action changetoppopularaction', () => {
        const toppopul = actions.changetoppopularaction();
        expect(toppopul).toEqual({type: 'ChangeTopPopular'});
    });
    it('Action changetopgrowingaction', () => {
        const topgrowing = actions.changetopgrowingaction();
        expect(topgrowing).toEqual({type: 'ChangeTopGrowing'});
    })
});