import { types } from 'mobx-state-tree';

export const AppStore = types.model("AppStore", {
    title: 'Provisr',
});

const Site = types.model("Site", {
    name: types.string,
    theme: types.string,
});

export const SiteStore = types.model("SiteStore", {
    sites: types.array(Site),
});

const User = types.model("User", {
    name: types.string,
    login: types.string,
    sites: types.array(Site),
});

export const UserStore = types.model("UserStore", {
    loggedIn: types.boolean,
    user: User,
});
