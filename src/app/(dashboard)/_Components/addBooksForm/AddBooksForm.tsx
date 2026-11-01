

"use client";

import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ImageIcon,
  ImagePlus,
  Plus,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const AddBooksForm = () => {
  
  const [photoURL, setPhotoURL] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const [image, setImage] = useState<File | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const bookData = {
      title: formData.get("title"),
      author: formData.get("author"),
      category: formData.get("category"),
      description: formData.get("description"),
      image: image,
      userName: formData.get("userName"),
      userEmail: formData.get("userEmail"),
    };

    // Static demo: no database or image upload yet.
    console.log("New Book:", bookData);

    setSuccess(true);
    form.reset();
    setImage(null);
  };

  return (
    <div className="min-h-screen  px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
      

        {/* Page Heading */}
        <div className="mb-8 text-center">
          <div
            className="mb-5 flex h-12 w-12 items-center  mx-auto justify-center
          rounded-2xl bg-secondary text-secondary-foreground"
          >
            <BookOpen size={24} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Add a New Book
          </h1>

          <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
            Share a favorite read with the BookNook community.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div
            className="mb-6 flex items-center gap-3 rounded-xl
          border border-muted-sage/50 bg-secondary/50 p-4
          text-sm text-foreground"
          >
            <CheckCircle2 className="shrink-0 text-primary" size={20} />
            <p>Your book has been added successfully! This is a static demo.</p>
          </div>
        )}

          {/* Back Link */}
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm
          text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        {/* Add Book Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-2xl border border-border
          bg-card p-5 shadow-sm sm:p-8"
        >
          {/* Book Information */}
          <section className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold">Book Information</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Enter the details of the book you want to share.
              </p>
            </div>

            {/* Book Title */}
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Book Title <span className="text-destructive">*</span>
              </label>

              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter book title"
                required
                className="h-11 w-full rounded-lg border border-input
                bg-background px-3 text-sm text-foreground
                placeholder:text-muted-foreground
                outline-none transition
                focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            {/* Author + Category */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="author" className="text-sm font-medium">
                  Author Name <span className="text-destructive">*</span>
                </label>

                <input
                  id="author"
                  name="author"
                  type="text"
                  placeholder="Enter author name"
                  required
                  className="h-11 w-full rounded-lg border border-input
                  bg-background px-3 text-sm text-foreground
                  placeholder:text-muted-foreground
                  outline-none transition
                  focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category <span className="text-destructive">*</span>
                </label>

                <select
                  id="category"
                  name="category"
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-lg border border-input
                  bg-background px-3 text-sm text-foreground
                  outline-none transition
                  focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Fiction">Fiction</option>
                  <option value="Science">Science</option>
                  <option value="History">History</option>
                  <option value="Kids">Kids</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            {/* Book Image */}
            {/* <div className="space-y-2">
              <label htmlFor="image" className="text-sm font-medium">
                Book Image <span className="text-destructive">*</span>
              </label>

              <label
                htmlFor="image"
                className="flex min-h-36 cursor-pointer flex-col
                items-center justify-center rounded-xl border-2
                border-dashed border-input bg-background p-6
                text-center transition hover:border-primary
                hover:bg-secondary/30"
              >
                <div
                  className="mb-3 flex h-11 w-11 items-center
                justify-center rounded-full bg-secondary
                text-secondary-foreground"
                >
                  <ImagePlus size={22} />
                </div>

                <span className="text-sm font-medium">
                  {image ? image.name : "Click to upload a book cover"}
                </span>

                <span className="mt-1 text-xs text-muted-foreground">
                  PNG, JPG or WEBP
                </span>

                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  required
                  className="sr-only"
                  onChange={(e) => {
                    setImage(e.target.files?.[0] ?? null);
                    setSuccess(false);
                  }}
                />
              </label>

              <p className="text-xs text-muted-foreground">
                Image upload to ImgBB or Postimages will be connected later.
              </p>
            </div> */}

                {/* Book Image */}
              <div className="space-y-1.5">
                <Label>
                  Book Image{" "}
                  <span className="font-normal text-[#85896B]"></span>
                </Label>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative flex-1">

                    <ImageIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#85896B]" />
                    <Input
                      type="url"
                      placeholder="Paste photo URL"
                      value={photoURL}
                      onChange={(e) => {
                        setPhotoURL(e.target.value);
                        setPhotoFile(null);
                      }}
                      className="border-[#D5C6A9] bg-[#FAF0DF] pl-10 focus-visible:ring-[#85896B] dark:border-[#69745D] dark:bg-[#30392F] h-11 w-full "
                    />
                  </div>

                  <label className="flex min-h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-[#85896B] bg-[#A9B49A]/20 px-3 text-sm font-medium text-[#49372D] transition hover:bg-[#A9B49A]/40 dark:text-[#FAF0DF] sm:max-w-36.25">
                    <Upload className="h-4 w-4" />
                    <span className="max-w-26.25 truncate">
                      {photoFile ? photoFile.name : "Upload Photo"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setPhotoFile(file);
                        if (file) setPhotoURL("");
                      }}
                    />
                  </label>
                </div>
                <p className="text-xs text-[#85896B] dark:text-[#A9B49A]">
                  Use a photo URL or upload an image from your device.
                </p>
              </div>

            {/* Short Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Short Description <span className="text-destructive">*</span>
              </label>

              <textarea
                id="description"
                name="description"
                rows={4}
                required
                placeholder="Write a short description about this book..."
                className="w-full resize-y rounded-lg border
                border-input bg-background px-3 py-3 text-sm
                text-foreground placeholder:text-muted-foreground
                outline-none transition
                focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </section>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* User Information */}
          <section className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold">Contributor Information</h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Your account information is attached to this book.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Static User Name */}
              <div className="space-y-2">
                <label htmlFor="userName" className="text-sm font-medium">
                  User Name
                </label>

                <input
                  id="userName"
                  name="userName"
                  type="text"
                  value="Mithila Akter"
                  readOnly
                  className="h-11 w-full rounded-lg border
                  border-input bg-muted px-3 text-sm
                  text-muted-foreground outline-none"
                />
              </div>

              {/* Static User Email */}
              <div className="space-y-2">
                <label htmlFor="userEmail" className="text-sm font-medium">
                  User Email
                </label>

                <input
                  id="userEmail"
                  name="userEmail"
                  type="email"
                  value="mithila@example.com"
                  readOnly
                  className="h-11 w-full rounded-lg border
                  border-input bg-muted px-3 text-sm
                  text-muted-foreground outline-none"
                />
              </div>
            </div>

        
          </section>

          {/* Submit Button */}
          <div
            className="flex flex-col-reverse gap-3 border-t
          border-border pt-6 sm:flex-row sm:justify-end"
          >
            <Link
              href="/dashboard"
              className="inline-flex h-11 items-center justify-center
              rounded-lg border border-border px-5 text-sm
              font-medium transition hover:bg-muted"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="inline-flex h-11 items-center
              justify-center gap-2 rounded-lg bg-primary
              px-6 text-sm font-semibold text-primary-foreground
              shadow-sm transition hover:opacity-90
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-ring
              focus-visible:ring-offset-2"
            >
              <Plus size={18} />
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooksForm;
