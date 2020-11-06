/* eslint-disable no-console */
import React from 'react'
import {
  H1,
  H2,
  Code,
  Paragraph,
  Article,
  DevIcon,
  Grid,
  Cell
} from '@s-ui/documentation-library'

import AtomActionButton, {
  atomActionButtonColors,
  atomActionButtonSizes
} from '../../../../components/atom/actionButton/src'
import ActionButtonCatalog from './ActionButtonCatalog'

const icon = <DevIcon icon="DiGithubBadge" />

const BASE_CLASS_DEMO = `DemoAtomActionButton`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const Demo = () => {
  return (
    <div className="sui-StudioPreview" mode="light">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>ActionButton</H1>
        <Paragraph>Button used as</Paragraph>
        <Article className={CLASS_SECTION}>
          <H2>Colours</H2>
          <div>
            <Paragraph>
              These are the available <Code>color</Code> of action buttons,
              which are <Code>"{atomActionButtonColors.PRIMARY}"</Code> by
              default.
            </Paragraph>
            <ActionButtonCatalog icon={icon} />
          </div>
        </Article>
        <br />
        <Article className={CLASS_SECTION}>
          <H2>Sizes</H2>
          <Paragraph>Size of the icon</Paragraph>
          <div>
            <Paragraph>
              We define 3 diferent sizes for action button exported as{' '}
              <Code>atomActionButtonSizes</Code>
            </Paragraph>
            <Grid cols={3} gutter="10">
              <Cell style={flexCenteredStyle}>atomActionButtonSizes.SMALL</Cell>
              <Cell style={flexCenteredStyle}>
                atomActionButtonSizes.MEDIUM
              </Cell>
              <Cell style={flexCenteredStyle}>atomActionButtonSizes.LARGE</Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  icon={icon}
                  size={atomActionButtonSizes.SMALL}
                >
                  Button
                </AtomActionButton>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  icon={icon}
                  size={atomActionButtonSizes.MEDIUM}
                >
                  Button
                </AtomActionButton>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  icon={icon}
                  size={atomActionButtonSizes.LARGE}
                >
                  Button
                </AtomActionButton>
              </Cell>
            </Grid>
          </div>
        </Article>
        <br />
        <Article className={CLASS_SECTION}>
          <H2>Link buttons</H2>
          <Paragraph>
            Action-Buttons can also be used as anchors to redirect to a
            different url once clicking on them.
          </Paragraph>
          <div>
            <Grid cols={4} gutter="10">
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  link
                  title="button link"
                  target="_blank"
                  href="http://www.google.com"
                  icon={icon}
                >
                  Button link
                </AtomActionButton>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  link
                  href="http://www.google.com"
                  icon={icon}
                  style="outline"
                  title="button link"
                >
                  Button link
                </AtomActionButton>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  link
                  href="http://www.google.com"
                  icon={icon}
                  title="button link"
                  style="flat"
                >
                  Button link
                </AtomActionButton>
              </Cell>
              <Cell style={flexCenteredStyle}>
                <AtomActionButton
                  link
                  href="http://www.google.com"
                  icon={icon}
                  title="button link"
                  style="flat"
                  disabled
                >
                  Button link disabled
                </AtomActionButton>
              </Cell>
            </Grid>
          </div>
        </Article>
      </div>
    </div>
  )
}

export default Demo
