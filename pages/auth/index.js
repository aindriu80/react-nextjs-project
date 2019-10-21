import React from 'react';
import User from '../../components/User';

const authIndexPage = () =>(
    <div>
        <h1>The Auth Index page</h1>
        <User name="Aindriú" age={39} />
    </div>
);

export default authIndexPage;