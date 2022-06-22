import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';

export default function ProtectedRoute(props) {
  console.log('made it to protected', props);
  const Component = withAuthenticationRequired(props.component, {
    onRedirecting: () => <div>Redirected</div>,
  });

  return <Component user={props.user} />;
}
