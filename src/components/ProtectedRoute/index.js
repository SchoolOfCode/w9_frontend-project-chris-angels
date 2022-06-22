import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
// import { Loader } from './loader';
// import Home from '../Home';

export default function ProtectedRoute(props) {
  console.log('made it to protected');
  const Component = withAuthenticationRequired(props.component, {
    onRedirecting: () => <div>Redirected</div>,
  });

  return <Component user={props.user} />;
}
