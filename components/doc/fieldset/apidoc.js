import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="properties" label="Properties">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>legend</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Header text of the fieldset.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>toggleable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When specified, content can toggled by clicking the legend.</td>
                            </tr>
                            <tr>
                                <td>collapsed</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines the default visibility state of the content.</td>
                            </tr>
                            <tr>
                                <td>transitionOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>
                                    The properties of{' '}
                                    <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">
                                        CSSTransition
                                    </a>{' '}
                                    can be customized, except for "nodeRef" and "in" properties.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="events" label="Events">
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onCollapse</td>
                                <td>event.originalEvent: Browser event </td>
                                <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
                            </tr>
                            <tr>
                                <td>onExpand</td>
                                <td>event.originalEvent: Browser event </td>
                                <td>Callback to invoke when a tab gets expanded.</td>
                            </tr>
                            <tr>
                                <td>onToggle</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.value: Collapsed state as a boolean
                                </td>
                                <td>Callback to invoke when a tab gets expanded.</td>
                            </tr>
                            <tr>
                                <td>onClick</td>
                                <td>event Browser event </td>
                                <td>Callback to invoke when fieldset is clicked.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
