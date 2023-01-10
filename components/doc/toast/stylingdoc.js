import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function StylingDoc() {
    return (
        <>
            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>p-toast</td>
                                <td>Main container element.</td>
                            </tr>
                            <tr>
                                <td>p-toast-container</td>
                                <td>Container of a message item.</td>
                            </tr>
                            <tr>
                                <td>p-toast-item</td>
                                <td>Message element.</td>
                            </tr>
                            <tr>
                                <td>p-toast-icon-close</td>
                                <td>Close icon of a message.</td>
                            </tr>
                            <tr>
                                <td>p-toast-image</td>
                                <td>Severity icon.</td>
                            </tr>
                            <tr>
                                <td>p-toast-message</td>
                                <td>Container of message texts.</td>
                            </tr>
                            <tr>
                                <td>p-toast-title</td>
                                <td>Summary of the message.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
