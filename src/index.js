import { Controller } from "@hotwired/stimulus";
import "@kanety/stimulus-static-actions";
import Dropzone from "dropzone";

export default class extends Controller {
  // For a list of all possible options, refer to https://github.com/dropzone/dropzone/blob/main/src/options.js
  static values = {
    uploadMultiple: { type: Boolean, default: false },
    filesizeBase: { type: Number, default: 1000 },
    maxFilesize: { type: Number, default: 256 },
    maxFiles: { type: Number, default: 10 },
    paramName: { type: String, default: "file" },
    createImageThumbnails: { type: Boolean, default: true },
    maxThumbnailFilesize: { type: Number, default: 10 },
    thumbnailWidth: { type: Number, default: 120 },
    thumbnailHeight: { type: Number, default: 120 },
    thumbnailMethod: { type: String, default: "crop" },
    clickable: { type: Boolean, default: true },
    ignoreHiddenFiles: { type: Boolean, default: true },
    autoQueue: { type: Boolean, default: true },
    previewsContainer: { type: String, default: "" }, // css selector
    disablePreviews: { type: Boolean, default: false },
    dictDefaultMessage: { type: String, default: "Drop files here to upload" },
    dictFallbackMessage: {
      type: String,
      default: "Your browser does not support drag'n'drop file uploads.",
    },
    dictFallbackText: {
      type: String,
      default:
        "Please use the fallback form below to upload your files like in the olden days.",
    },
    dictFileTooBig: {
      type: String,
      default:
        "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
    },
    dictInvalidFileType: {
      type: String,
      default: "You can't upload files of this type.",
    },
    dictResponseError: {
      type: String,
      default: "Server responded with {{statusCode}} code.",
    },
    dictCancelUpload: { type: String, default: "Cancel upload" },
    dictUploadCanceled: { type: String, default: "Upload canceled" },
    dictCancelUploadConfirmation: {
      type: String,
      default: "Are you sure you want to cancel this upload?",
    },
    dictRemoveFile: { type: String, default: "Remove file" },
    dictMaxFilesExceeded: {
      type: String,
      default: "You can not upload any more files.",
    },
    dictFileSizeUnits: {
      type: Object,
      default: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" },
    },
    // growWidth: String,
    // growHeight: String,
  };

  // static actions = [
  //   ["element", "dragenter->enter"],
  //   ["element", "dragleave->leave"],
  //   ["element", "drop->drop"],
  //   ["element", "dragover@document->overDoc"],
  //   ["element", "dragleave@document->leaveDoc"],
  //   ["element", "drop@document->dropDoc"],
  // ];

  get input() {
    return this.scope.findElement("input[type=file]");
  }

  connect() {
    // this.counter = 0;
    this.dropzone = new Dropzone(this.element, {
      uploadMultiple: this.uploadMultipleValue,
      filesizeBase: this.filesizeBaseValue,
      maxFilesize: this.maxFilesizeValue,
      maxFiles: this.maxFilesValue,
      paramName: this.paramNameValue,
      createImageThumbnails: this.createImageThumbnailsValue,
      maxThumbnailFilesize: this.maxThumbnailFilesizeValue,
      thumbnailWidth: this.thumbnailWidthValue,
      thumbnailHeight: this.thumbnailHeightValue,
      thumbnailMethod: this.thumbnailMethodValue,
      clickable: this.clickableValue,
      ignoreHiddenFiles: this.ignoreHiddenFilesValue,
      autoQueue: this.autoQueueValue,
      previewsContainer: this.previewsContainerValue,
      disablePreviews: this.disablePreviewsValue,
      dictDefaultMessage: this.dictDefaultMessageValue,
      dictFallbackMessage: this.dictFallbackMessageValue,
      dictFallbackText: this.dictFallbackTextValue,
      dictFileTooBig: this.dictFileTooBigValue,
      dictInvalidFileType: this.dictInvalidFileTypeValue,
      dictResponseError: this.dictResponseErrorValue,
      dictCancelUpload: this.dictCancelUploadValue,
      dictUploadCanceled: this.dictUploadCanceledValue,
      dictCancelUploadConfirmation: this.dictCancelUploadConfirmationValue,
      dictRemoveFile: this.dictRemoveFileValue,
      dictMaxFilesExceeded: this.dictMaxFilesExceededValue,
      dictFileSizeUnits: this.dictFileSizeUnitsValue,
    });
  }

  disconnect() {
    this.dropzone.destroy();
  }

  // enter(e) {
  //   console.log("Enter from dropzone controller");
  //   e.preventDefault();
  //   if (!this.isDroppable(e.dataTransfer)) return;

  //   this.counter++;
  //   this.toggleClass(e.dataTransfer, true);
  // }

  // leave(e) {
  //   e.preventDefault();
  //   if (!this.isDroppable(e.dataTransfer)) return;

  //   this.counter--;
  //   if (this.counter == 0) this.toggleClass(e.dataTransfer, false);
  // }

  // drop(e) {
  //   e.preventDefault();
  //   if (!this.isDroppable(e.dataTransfer)) return;

  //   this.counter = 0;
  //   this.toggleClass(e.dataTransfer, false);

  //   let input = this.input;
  //   if (input) {
  //     input.files = e.dataTransfer.files;
  //     input.dispatchEvent(
  //       new Event("input", { bubbles: true, cancelable: true })
  //     );
  //     input.dispatchEvent(
  //       new Event("change", { bubbles: true, cancelable: true })
  //     );
  //   }
  //   this.dispatch("dropped", { detail: { files: e.dataTransfer.files } });
  // }

  // toggleClass(dataTransfer, dragover) {
  //   if (dragover && this.isDroppable(dataTransfer)) {
  //     this.element.classList.add("st-dropzone--dragover");
  //   } else {
  //     this.element.classList.remove("st-dropzone--dragover");
  //   }
  // }

  // overDoc(e) {
  //   e.preventDefault();
  //   if (!this.isDroppable(e.dataTransfer)) return;

  //   this.dragging = true;
  //   this.dragin();
  // }

  // leaveDoc(e) {
  //   e.preventDefault();
  //   if (!this.isDroppable(e.dataTransfer)) return;

  //   this.dragging = false;
  //   if (this.timeout) clearTimeout(this.timeout);
  //   this.timeout = setTimeout(() => {
  //     if (!this.dragging) this.dragout();
  //   }, 200);
  // }

  // dropDoc(e) {
  //   e.preventDefault();
  //   if (!this.isDroppable(e.dataTransfer)) return;

  //   this.dragging = false;
  //   this.dragout();
  // }

  // dragin() {
  //   this.element.classList.add("st-dropzone--dragin");
  //   if (this.growWidthValue) {
  //     this.element.style.minWidth = this.growWidthValue;
  //   }
  //   if (this.growHeightValue) {
  //     this.element.style.minHeight = this.growHeightValue;
  //   }
  // }

  // dragout() {
  //   this.element.classList.remove("st-dropzone--dragin");
  //   if (this.growWidthValue) {
  //     this.element.style.minWidth = "";
  //   }
  //   if (this.growHeightValue) {
  //     this.element.style.minHeight = "";
  //   }
  // }

  // isDroppable(dataTransfer) {
  //   return (
  //     dataTransfer.items.length &&
  //     dataTransfer.items[0].kind == "file" &&
  //     this.isAllowedByInput(dataTransfer)
  //   );
  // }

  // isAllowedByInput(dataTransfer) {
  //   let input = this.input;
  //   return (
  //     !input || input.hasAttribute("multiple") || dataTransfer.items.length == 1
  //   );
  // }
}
