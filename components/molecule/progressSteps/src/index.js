import {Children, cloneElement, useRef} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import {
  BASE_CLASS,
  CLASS_STEPS,
  CLASS_CONTENT,
  CLASS_COMPRESSED_INFO,
  CLASS_VERTICAL,
  CLASS_COMPRESSED,
  PROGRESS_BAR_JUSTIFY_CONTENT
} from './config.js'
import MoleculeProgressStep, {
  STATUSES
} from './components/MoleculeProgressStep/index.js'

const MoleculeProgressSteps = ({
  vertical,
  children,
  iconStepDone,
  compressed,
  progressBarJustifyContent = PROGRESS_BAR_JUSTIFY_CONTENT.LEGACY
}) => {
  const activeStepContent = useRef()

  const className = cx(BASE_CLASS, {
    [CLASS_VERTICAL]: vertical,
    [CLASS_COMPRESSED]: compressed
  })

  const compressedInfoSteps = Children.toArray(children)
    .filter(Boolean)
    .map((child, index, children) => {
      const {label, status} = child.props
      const totalSteps = children.length
      return (
        <div
          key={index}
          className={cx(`${CLASS_COMPRESSED_INFO}-item`, {
            [`${CLASS_COMPRESSED_INFO}-item--active`]:
              status === STATUSES.ACTIVE
          })}
        >
          {`${index + 1}/${totalSteps}: ${label}`}
        </div>
      )
    })

  const extendedChildren = Children.toArray(children)
    .filter(Boolean)
    .map((child, index, children) => {
      const {
        icon: iconChild,
        iconActive,
        status,
        children: childrenChild
      } = child.props

      const totalChildren = children.length
      const numStep = index + 1
      const lastStep = index >= totalChildren - 1

      const isVisited = status === STATUSES.VISITED
      const isActive = status === STATUSES.ACTIVE
      let icon = iconChild
      if (isVisited) icon = iconStepDone
      if (isActive) {
        icon = iconActive || iconChild
        activeStepContent.current = childrenChild
      }

      return cloneElement(child, {
        numStep,
        lastStep,
        icon,
        progressBarJustifyContent,
        compressed
      })
    })

  const childrenContent = Children.toArray(children)
    .filter(Boolean)
    .map((child, index, children) => {
      const {children: childrenChild, status} = child.props
      return (
        <div
          key={index}
          className={cx(`${CLASS_CONTENT}-item`, {
            [`${CLASS_CONTENT}-item--active`]: status === STATUSES.ACTIVE
          })}
        >
          {childrenChild}
        </div>
      )
    })

  return (
    <div className={className}>
      {compressed && (
        <div
          className={cx(CLASS_COMPRESSED_INFO, {
            [`${CLASS_COMPRESSED_INFO}--justifyContent-${progressBarJustifyContent}`]: progressBarJustifyContent
          })}
        >
          {compressedInfoSteps}
        </div>
      )}
      <div
        className={cx(CLASS_STEPS, {
          [`${CLASS_STEPS}--justifyContent-${progressBarJustifyContent}`]: progressBarJustifyContent
        })}
      >
        {extendedChildren}
      </div>
      <div className={CLASS_CONTENT}>{childrenContent}</div>
    </div>
  )
}

MoleculeProgressSteps.displayName = 'MoleculeProgressSteps'

MoleculeProgressSteps.propTypes = {
  /** children */
  children: PropTypes.any,

  /** Icon to display when status VISITED */
  iconStepDone: PropTypes.node.isRequired,

  /** Compressed mode (mobile) */
  compressed: PropTypes.bool,

  /** Vertical mode */
  vertical: PropTypes.bool,

  /** justify the progressbar elements in its area following the element declared **/
  progressBarJustifyContent: PropTypes.oneOf(
    Object.values(PROGRESS_BAR_JUSTIFY_CONTENT)
  )
}

export default MoleculeProgressSteps
export {
  MoleculeProgressStep,
  STATUSES,
  STATUSES as moleculeProgressStepsStatuses,
  PROGRESS_BAR_JUSTIFY_CONTENT as moleculeProgressStepsJustifyContentBar
}
