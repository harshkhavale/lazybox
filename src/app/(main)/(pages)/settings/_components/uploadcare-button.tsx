'use client' // is needed only if you’re using React Server Components
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

export const UploadCareButton=()=> {
  return (
    <div>
      <FileUploaderRegular
         sourceList="local, camera, facebook, gdrive"
         cameraModes="photo, video"
         classNameUploader="uc-dark"
         pubkey="e1f97deb8eead9945548"
      />
    </div>
  );
}

export default UploadCareButton;