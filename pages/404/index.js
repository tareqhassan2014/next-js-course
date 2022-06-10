import Link from 'next/link';

export default function Nodtfound(params) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not
                            found!
                        </div>
                        <div className="error-actions">
                            <Link href="/" className="btn btn-primary btn-lg">
                                <a className="glyphicon glyphicon-home">
                                    Take Me Home
                                </a>
                            </Link>
                            <a
                                href="mailto:
                            ?subject=Feedback
                            &body=Your feedback here."
                                className="btn btn-default btn-lg"
                            >
                                <span className="glyphicon glyphicon-envelope"></span>
                                Contact Support{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
