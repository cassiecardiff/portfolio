---
title: "Researching the probabilistic product: user research in the age of AI"
date: 2026-08-04
summary: "AI products don't stand still. User research needs to evolve from a one-off activity into an ongoing part of product development."
tags:
  - post
  - AI
  - Research methods
---

Up until recently, product development has followed a fairly predictable cycle: you do discovery, you define the problem, you design, build and test, you ship, you iterate. Research sits at the front of that cycle, informing what gets built, and at key validation points along the way.

That model was designed for a particular kind of product: one that behaves the same way every time. Type in a postcode, get back an address. Click a button, trigger an action. The same input reliably produces the same output, which means you can test a thing, know what you've tested and have reasonable confidence it reflects what your users will experience once the thing goes live.

AI products don't work like that, and that changes where research sits, what it needs to ask and what skills it requires.

## The deterministic assumption

Traditional digital products are deterministic: the rules are written down, the behaviours are specified and the outputs are predictable. This is why usability testing works the way it does. You can give five participants the same task, observe five comparable experiences and draw meaningful conclusions.

Generative AI, on the other hand, is probabilistic. Ask the same question twice, and you'll get two different answers - both potentially valid but worded differently, to varying degrees. The system has no stable ground truth: it produces the most statistically likely response based on its training data and the context of the conversation. That means the product your users experience today is not quite the same product they experienced yesterday, and it's not the same one other users expressing the same question in different ways experienced this morning.

This is the fundamental nature of the technology that necessitates a shift in how we think about research and testing.

## A cautionary tale

In October 2025, Canada's Auditor General [audited the Canada Revenue Agency's AI tax chatbot, Charlie](https://ca.news.yahoo.com/cra-spent-18m-charlie-tax-090009539.html) - an $18 million tool that had handled over seven million conversations. The findings were damaging: Charlie answered correctly in only 2 out of 6 questions asked, and the headlines wrote themselves.

The more interesting part is what happened next. [As one Canadian government technologist documented](https://federal-field-notes.ca/articles/2026-04-17-the-ai-compliance-quandary/), by April 2026, Charlie had improved from 33% accuracy to around 72% on a broader question set. The CRA had iterated, and the product got meaningfully better.

That's a great outcome, but it shouldn't have taken an external audit to trigger an evaluation cycle that could have been built in from the start. The auditor effectively became the research function that the product team hadn't engaged yet, and the cost of that gap was seven million conversations with a tool that was wrong most of the time.

## The lifecycle looks different now

For an AI product, the product is never fully stable. Model updates change behaviour. The same feature can work well for one user segment and fail badly for another, not because of a design flaw, but because probabilistic systems interact differently with different inputs.

This means research can't just be front-loaded and handed off: it needs to be continuous. The questions researchers need to ask are different too, not just "can users complete the task?" but "do users know when to trust the output?", "what happens to trust when the AI gets something wrong?" and "does the user have an accurate enough mental model of what this system can and can't do to use it safely?"

## What this means in practice

Discovery still matters - understanding the problem deeply before building anything remains the most valuable investment a team can make. But for AI products, it's the beginning of an ongoing practice rather than a phase that completes and hands off.

The Charlie story is instructive here. The CRA got there eventually, but the evaluation cycle that fixed it had to be forced from outside. Building it in from the start looks something like this:

- **Conduct research regularly.** AI products don't stabilise the way traditional products do: model updates, new content and edge cases can all shift how the product behaves. A research function that winds down after go-live will miss most of what matters.
- **Bring real user questions into evals.** Engineering teams building evaluation sets tend to test what they expect users to ask. Researchers know what users actually ask, which is often messier, more varied and more revealing. An eval set built without user research input will have blind spots that only show up when something goes wrong publicly.
- **Run evals with real users, not just against automated benchmarks.** A system can score well on an internal question bank and still fail in ways that only become visible when you watch a real person use it. Automated evals tell you if the system is producing accurate answers, but user research tells you if people are using those answers well.
- **Track trust as an ongoing metric.** Specifically, whether users have a well-calibrated sense of what the system can and can't do. Users who trust AI too readily are as much a risk as users who don't trust it at all.

AI products are a different kind of thing to the products most researchers were trained on. They're uncertain, unstable and often wrong in ways that are invisible until it's too late. The researchers and teams that navigate that well won't be the ones who treat research as a discovery activity: they'll be the ones who understand that launch is just the beginning.
