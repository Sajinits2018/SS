
import React from "react"

/**
 * WorkupHTML Module
 * Fields:
 * - markup (Long Text / Rich Text): the raw HTML snippet to inject into the Workup template content area.
 */
const WorkupHTML = ({ module }: any) => {
  const fields = module?.fields || {}
  const markup = fields.markup || ""
  return (
    <section dangerouslySetInnerHTML={{ __html: markup }} />
  )
}

export default WorkupHTML
