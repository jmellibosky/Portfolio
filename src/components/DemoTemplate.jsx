export default function DemoTemplate({title, ProjectDemo}) {
    return (
        <div id="project-template">
            <h5>{title}</h5>
            <div id="demo-frame">
                <ProjectDemo />
            </div>
        </div>
    );
}