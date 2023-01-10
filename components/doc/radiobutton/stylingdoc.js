import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';
import Link from 'next/link';

export function StylingDoc() {
    return (
        <>
            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
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
                                <td>p-radiobutton</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-radiobutton-box</td>
                                <td>Container of icon.</td>
                            </tr>
                            <tr>
                                <td>p-radiobutton-icon</td>
                                <td>Icon element.</td>
                            </tr>
                            <tr>
                                <td>p-radiobutton-label</td>
                                <td>Label element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
