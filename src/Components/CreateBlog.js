import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function CreateBlog() {
    const [blogContents, setBlogContents] = useState(['', '', '']); // Array to hold content for 3 sections

    // Unified handler for editor changes
    const handleEditorChange = (content, editorIndex) => {
        const updatedContents = [...blogContents];
        updatedContents[editorIndex] = content;
        setBlogContents(updatedContents);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Create Your Blog
            </h1>

            <div className="bg-white shadow-md rounded-lg p-6 w-4/5 max-w-5xl">
                {[0, 1, 2].map((index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">
                            Section {index + 1}
                        </h2>
                        <Editor
                            apiKey="9jo3lu73p1xbfqaw6jvgmsbrmy7qr907nqeafe1wbek6os9d"
                            onEditorChange={(newValue) =>
                                handleEditorChange(newValue, index)
                            }
                            init={{
                                height: "30vh", // Each editor covers 30% of viewport height
                                content_style: `
                                    body {
                                        margin: 0;
                                        padding: 0;
                                    }
                                    .mce-content-body {
                                        background-color: transparent !important;
                                    }
                                `,
                                plugins:
                                    'a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template tinydrive tinymcespellchecker typography visualblocks visualchars wordcount',
                                toolbar:
                                    'undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | code preview',
                                menubar: 'file edit view insert format tools table help',
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreateBlog;
