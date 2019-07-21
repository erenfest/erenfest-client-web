import React, { FC, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router'

import { NamedRoutes } from '../../constants'
import { Home } from './Home'
import { Lobby } from './Lobby'
import { NotFound } from './NotFound'

export const Pages: FC = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path={NamedRoutes.Root} component={Home} exact={true} />
      <Route path={NamedRoutes.NotFound} component={NotFound} exact={true} />

      <Route path={NamedRoutes.Lobby} component={Lobby} exact={true} />

      <Redirect to={NamedRoutes.Error} />
    </Switch>
  </Suspense>
)
