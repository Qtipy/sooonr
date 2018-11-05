import { FlowRouter } from 'meteor/kadira:flow-router';
import { MainLayout } from "../imports/ui/layouts/MainLayout";
import { mount } from 'react-mounter';
import App from "../imports/ui/components/App";
import Roman from "../imports/ui/components/Roman";
import React from 'react';

// Set up all routes in the app
FlowRouter.route('/', {
    // name: 'App.home',
    action() {
        // BlazeLayout.render('App_body', { main: 'App_home' });
        console.log('homeeee');
        // ReactLayout.render(MainLayout); // Need to use react mounter instead
        mount(MainLayout, {
            content: (<Roman />)
        })

    },
});

FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', { main: 'App_notFound' });
    },
};
