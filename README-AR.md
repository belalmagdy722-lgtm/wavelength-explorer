# Wavelength — الموقع التفاعلي للبحث

موقع تعليمي تفاعلي مبني على البحث المرفق عن الإشعاع الكهرومغناطيسي واستخداماته في الحياة اليومية.

## تشغيل الموقع على جهازك

المشروع Static Website؛ لا يحتاج Laravel أو PHP أو MySQL أو Node أو API keys.

على Ubuntu افتح Terminal داخل فولدر المشروع وشغّل:

```bash
./run-local.sh
```

ثم افتح الرابط التالي في المتصفح:

```text
http://localhost:8000
```

لإيقاف السيرفر اضغط `Ctrl + C` في Terminal.

## رفع الموقع مجانًا على GitHub Pages

1. اعمل Sign in على GitHub وأنشئ Repository جديد باسم مثل `wavelength-explorer`.
2. فك ضغط الملف الذي استلمته.
3. ارفع **محتويات فولدر المشروع** إلى جذر الـ Repository، وليس ملف ZIP نفسه. ارفع الملفات التالية:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `.nojekyll`
   - `run-local.sh`
   - `README.md` و `README-AR.md`
4. اعمل Commit على فرع `main`.
5. من الـ Repository افتح `Settings` ثم `Pages`.
6. في `Build and deployment` اختار `Deploy from a branch`.
7. اختار Branch: `main` و Folder: `/(root)` ثم اضغط `Save`.
8. بعد انتهاء النشر ستجد رابط الموقع في نفس صفحة `Pages`. شكله سيكون:

```text
https://YOUR-USERNAME.github.io/wavelength-explorer/
```

استبدل `YOUR-USERNAME` باسم حسابك على GitHub.

بعد ذلك أي تعديل ترفعه على `main` سيتم نشره تلقائيًا بعد اكتمال GitHub Pages deployment.

## تعديل المحتوى

- النصوص وهيكل الصفحة: `index.html`.
- الألوان والتصميم والـ Responsive layout: `styles.css`.
- بيانات الموجات والحاسبة والاختبار والتفاعلات: `app.js`.

## ملاحظات علمية

الأطوال الموجية المعروضة أمثلة تقريبية وليست حدودًا فاصلة عالمية؛ قد تتداخل تقسيمات نطاقات الطيف حسب المرجع. الحاسبة تستخدم العلاقتين `c = f × λ` و `E = h × f` في الفراغ، ولا تحاكي امتصاص المواد أو الجرعات الطبية. جزء السلامة للتثقيف العام وليس نصيحة طبية شخصية.
