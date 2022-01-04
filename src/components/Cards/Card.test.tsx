import React from 'react';
import { render } from '@testing-library/react';

import { Card, CardContent, CardActions } from '.';

describe('Button', () => {
  test('renders the Button component', () => {
    render(
      <Card variant="elevated">
        <CardContent>Content</CardContent>
        <CardActions>Button Actions</CardActions>
      </Card>
    );
  });
});
