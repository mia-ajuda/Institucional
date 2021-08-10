import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Team from './pages/team';
import Contact from './pages/contact';
import Support from './pages/support';
import Storyboard from './pages/storyboard';
import SocialMedia from './pages/SocialMedia';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/team' component={Team} />
      <Route path='/contact' component={Contact} />
      <Route path='/social-media' component={SocialMedia} />
      <Route path='/support' component={Support} />
      <Route path='/story-board' component={Storyboard} />
    </Switch>
  );
}
